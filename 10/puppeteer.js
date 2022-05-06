
import puppeteer from 'puppeteer';


const browser = await puppeteer.launch({
 
  //  headless: false,
    args: ['--start-maximized'],
});

let page = await browser.newPage();
page.on('console', msg  => console.log('PAGE LOG:', msg.text()));
await page.goto("http://192.168.0.24:5500/1/index.html");  
 
while (true){
  await page.click('#logBtn');
}
 