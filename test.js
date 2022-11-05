//https://evisaforms.state.gov/Instructions/ACSSchedulingSystem.asp
const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const url= "https://evisaforms.state.gov/Instructions/ACSSchedulingSystem.asp";

async function run()
{
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(url);
   await page.waitForSelector("select[name='CountryCodeShow']");
   await page.click("body > form > table > tbody > tr:nth-child(3) > td:nth-child(3) > select",{delay:300});
   await page.type("select[name='CountryCodeShow']","ETH");
    await page.waitForSelector("select[name='PostCodeShow']");
    await page.click("select[name='PostCodeShow']");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.click("input[type='submit']");
}

run();