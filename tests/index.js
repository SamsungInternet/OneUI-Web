const puppeteer = require('puppeteer');
const { spawn } = require('child_process');
const util = require('util');
const glob = util.promisify(require('glob'));
const term = require( 'terminal-kit' ).terminal ;

let docsify;
const docsifyPromise = new Promise(resolve => {
  docsify = spawn('docsify', ['serve']);
  docsify.stdout.once('data', (data) => {
    resolve();
  });
  docsify.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  docsify.on('close', (code) => {
    console.log(`docsify exited with code ${code}`);
  });
})

let browser;
let hasViolations = false;

(async () => {
  const urls = (await glob('examples/**/*'));
  urls.push('');

  const colorMap = {
    "minor": "brightYellow",
    "moderate": "yellow",
    "serious": "red",
    "critical": "red"
  }

  browser = await puppeteer.launch();
  await docsifyPromise;

  for (const url of urls) {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/' + url);

    // On the docsify page scrape all the links
    if (url === '') {
      const hrefs = await page.$$eval('.sidebar-nav a', aS => aS.map(a => a.href));
      for (href of hrefs) {
        urls.push(href.replace('http://127.0.0.1:3000',''));
      }
    }

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

    //violations, passes, incomplete, inapplicable

    if (results.violations.length) {
      term.yellow((url || 'Docsify Index Page') + '\n');
    } else {
      term.green('✅ ' + (url || 'Docsify Index Page') + '\n');
    }

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
.catch(async e => {
  console.warn(e);
  await browser.close();
  docsify.kill();
  process.exit(1);
})
.then(async () => {

  console.log('cleaning up');
  await browser.close();
  docsify.kill();
  process.exit(hasViolations ? 1 : 0);
});