
import puppeteer from 'puppeteer';


const browser = await puppeteer.launch({
  //  headless: false,
  args: ['--start-maximized'],
});

let page = await browser.newPage();
//await page.goto("http://192.168.0.24:5500/1/index.html");
await page.goto("https://puppeteerframes.onrender.com/1/index.html");
// await page.click("#editBtn");
await page.evaluate(()=>editBtn.click());
// await page.click("#saveBtn");
await page.screenshot({ path: '1.png' });
await browser.close();