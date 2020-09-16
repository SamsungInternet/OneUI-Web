/* eslint-env node */
/* global axe */

const puppeteer = require("puppeteer");
const { spawn } = require("child_process");
const util = require("util");
const glob = util.promisify(require("glob"));
const term = require("terminal-kit").terminal;
const port = process.env.PORT || 3000;

let httpServer;
const httpServerPromise = new Promise((resolve) => {
	httpServer = spawn("http-server", ["../", "-p" + port, "-s"]);
	httpServer.stdout.on("data", (data) => {
		console.log(`stdout: ${data}`);
	});
	httpServer.on("close", (code) => {
		console.log(`httpServer exited with code ${code}`);
	});
	setTimeout(resolve, 1000);
});

let browser;
let hasViolations = false;

(async () => {
	const urls = await glob("demos/**/*.html");

	const colorMap = {
		minor: "brightYellow",
		moderate: "yellow",
		serious: "red",
		critical: "red",
	};

	browser = await puppeteer.launch({
		args: [
			"--disable-gpu",
			"--disable-dev-shm-usage",
			"--disable-setuid-sandbox",
			"--no-first-run",
			"--no-sandbox",
			"--no-zygote",
			"--single-process",
		],
	});
	await httpServerPromise;

	for (const mode of ["standard", "prefers-color-scheme:dark"]) {
		for (const url of urls) {
			const page = await browser.newPage();

			if (mode == "prefers-color-scheme:dark") {
				page.emulateMediaFeatures([
					{ name: "prefers-color-scheme", value: "dark" },
				]);
			}

			await page.goto("http://127.0.0.1:" + port + "/tests/" + url);

			await page.addScriptTag({
				url: "/tests/node_modules/axe-core/axe.min.js",
			});
            const results = await page.evaluate(() => {
                function getHTML(el) {
                    const tempEl = el.cloneNode();
                    tempEl.textContent = el.textContent;
                    return tempEl.outerHTML;
                }

				return new Promise((resolve) => {
					axe.run(function (err, results) {
                        if (err) throw err;
                        
                        // Check for buttons and ensure they have aria roles
                        const buttons = Array.from(document.querySelectorAll(`[class*=button]`));
                        const buttonRoleViolation = {
                            nodes: [],
                            description: "Button elements need to have aria role"
                        }
                        for (const b of buttons) {
                            if (results.violations.indexOf(buttonRoleViolation) === -1) {
                                results.violations.push(buttonRoleViolation);
                            }
                            if (b.getAttribute('role') !== 'button') {
                                buttonRoleViolation.nodes.push({
                                    impact: 'critical',
                                    html: getHTML(b),
                                });
                            }
                        }

						resolve(results);
					});
				}).catch((e) => ({
					error: e.message,
				}));
			});
			await page.close();

			if (results.error) {
				throw Error(results.error);
			}

			//violations, passes, incomplete, inapplicable

			if (results.violations.length) {
				term.yellow(url + " - " + mode + "\n");
			} else {
				term.green("✅ " + url + " - " + mode + "\n");
			}

			for (const violation of results.violations) {
				const nodes = violation.nodes;
				// for (const node of violation.nodes) {
				// 	if (!node.impact.match(/minor|moderate/)) {
				// 		nodes.push(node);
				// 	}
				// }

				if (nodes.length) term.bold(violation.description + "\n");
				for (const node of nodes) {
					hasViolations = true;
					term[colorMap[node.impact] || "green"](
						(node.impact === "critical" ? "!!" : "•") +
							" " +
							node.impact
					);
					term(" " + node.html + "\n");
				}
				if (nodes.length) console.log("\n");
			}
		}
	}
})()
	.catch(async (e) => {
		console.warn(e);
		await browser.close();
		httpServer.kill();
		process.exit(1);
	})
	.then(async () => {
		console.log("cleaning up");
		await browser.close();
		httpServer.kill();
		process.exit(hasViolations ? 1 : 0);
	});
