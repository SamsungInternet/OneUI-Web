const puppeteer = require('puppeteer');
const { spawn } = require('child_process');
const util = require('util');
const glob = util.promisify(require('glob'));

const docsify = spawn('docsify', ['serve']);
docsify.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
docsify.on('close', (code) => {
  console.log(`docsify exited with code ${code}`);
});

let browser;

(async () => {
  const urls = (await glob('examples/**/*'));
  urls.push('');

  await new Promise(r => setTimeout(r,1000));

  browser = await puppeteer.launch();

  for (const url of urls) {
    console.log(url);
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/' + url);
    await page.addScriptTag({url: '/node_modules/axe-core/axe.min.js'})
    const results = await page.evaluate(() => {
      return new Promise(resolve => {
        axe.run(function (err, results) {
          if (err) throw err;
          resolve(results);
        });
      });
    });
    await page.close();
    console.log(results);
  }
})()
.catch(e => console.warn(e))
.then(async () => {

  console.log('cleaning up');
  await browser.close();
  docsify.kill();
  process.exit();
});