const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const config = require('./config');

function cleanText (text) {
  return text.replace(/[\n\t]/g, '').replace(/Go/g, 'G').replace(' /', '/');
}

async function run () {
  const chrome = await puppeteer.launch();
  const page = await chrome.newPage();
  await page.goto(config.url);
  await page.type('#usrname', config.clientCode);
  await page.type('#pwd', config.clientPass);
  await page.click('#btnLogin');
  await page.waitForNavigation({waitUntil:'domcontentloaded'});
  const usage = cleanText(await page.$eval('.text_summary3', el => el.innerHTML));
  await chrome.close();
  await fs.writeFile(config.outputFile, usage);
  return usage;
}

run().then(console.log).then(process.exit);
