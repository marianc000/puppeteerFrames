import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  // headless: false,
  args: ['--start-maximized'],
});

let page = await browser.newPage();
page.on('console', msg => console.log('PAGE LOG:', msg.text()));
await page.goto("https://puppeteerframes.onrender.com/1/index.html", { waitUntil: 'networkidle0' });
//await page.goto("http://192.168.0.24:5500/1/index.html");
//await page.click("#editBtn");
await page.screenshot({ path: '0.png' });
 await page.evaluate(() => editBtn.click());
// await page.click("#editBtn"); 
// await page.click("#saveBtn");
 await page.evaluate(() => saveBtn.click());
await page.screenshot({ path: '2.png' });
await browser.close();