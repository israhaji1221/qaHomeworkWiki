import {By, Builder, Capabilities, WebDriver, until} from 'selenium-webdriver'
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome()).build()

test('asynx and await functionality', async () => {
    await driver.get('https://www.google.com'); 
    await driver.wait(until.elementsLocated(By.name('q'))); 
    await driver.findElement(By.name('q')).sendKeys('Puppies'); 
    await driver.wait(until.elementsLocated(By.id('rcnt'))); 
    let results = await driver.findElement(By.id('rcnt')).getText();
    expect(results.toLocaleLowerCase()).toContain('puppies');
})
afterAll(async () => {
    await driver.quit()
})