//package set up
import {googlePage} from './pageObjectPractice';
import {Builder, Capabilities, WebDriver} from 'selenium-webdriver';
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
const page = new googlePage(driver, "https://www.google.com"); 
//test set up 
test('do a search', async () => { 
    await page.navigate(); 
    await page.search('Chicago Cubs');
    await page.getResults(); 
    await page.driver.quit(); 
})