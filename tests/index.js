const puppeteer = require('puppeteer');
const { spawn } = require('child_process');
const util = require('util');
const glob = util.promisify(require('glob'));
const term = require( 'terminal-kit' ).terminal ;

const docsify = spawn('docsify', ['serve']);
docsify.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
docsify.on('close', (code) => {
  console.log(`docsify exited with code ${code}`);
});

let browser;
let hasViolations = false;

(async () => {
  const urls = (await glob('examples/**/*'));
  urls.push('');

  await new Promise(r => setTimeout(r,1000));

  browser = await puppeteer.launch();

  for (const url of urls) {
    term.green((url || 'Docsify Index Page') + '\n');
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/' + url);
    await page.addScriptTag({url: '/node_modules/axe-core/axe.min.js'})
    const results = await page.evaluate(() => {
      return new Promise(resolve => {
        axe.run(function (err, results) {
          if (err) throw err;
          resolve(results);
        });
      })
      .catch(e => ({
        error: e.message
      }));
    });
    await page.close();

    if (results.error) {
      throw Error(results.error);
    }

    const colorMap = {
      "minor": "brightYellow",
      "moderate": "yellow",
      "serious": "red",
      "critical": "red"
    }

    //violations, passes, incomplete, inapplicable

    for (const violation of results.violations) {
      hasViolations = true;
      term.bold(violation.description + '\n');
      for (const node of violation.nodes) {
        term[colorMap[node.impact] || 'green'](
          (node.impact === 'critical' ?'!!':'•') + ' ' + node.impact
        );
        term(' ' + node.html + '\n');
      }
      console.log('\n');
    }
  }
})()
.catch(e => console.warn(e))
.then(async () => {

  console.log('cleaning up');
  await browser.close();
  docsify.kill();
  process.exit(hasViolations ? 1 : 0);
});