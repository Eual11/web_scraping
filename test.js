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
   await page.click("body > form > table > tbody > tr:nth-child(3) > td:nth-child(3) > select",{delay:100}); 
   await page.type("select[name='CountryCodeShow']","ETHI"); 
   await page.keyboard.press("Enter"); //presses enter in case it gets out of focus
    await page.waitForSelector("option[value='ADD']"); //wait for the selector "with option value of ADD"
    await page.click("body > form > table > tbody > tr:nth-child(4) > td:nth-child(3) > select",{delay:100}); //clicks the drop down menu
    await page.keyboard.press("ArrowDown");// presses down to select AA
    await page.keyboard.press("Enter"); //hits enter
    await page.click("input[type='submit']"); //submits the form


    await page.waitForSelector("input");

    await page.click("input[value ^= 'Make']");

    await page.waitForSelector("input[type='submit']");

    await page.click("input[value ='AA']");

    await page.click("input[name='chkbox01']");

    await page.click("input[type='submit']");

    //await browser.close();

}

run();