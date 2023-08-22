import { Builder, By, Capabilities, WebDriver} from 'selenium-webdriver'; 
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

describe('practicing Xpath', () => {
    beforeEach(async () => {
        await driver.get('https//www.amazon.com/'); 
    }   ); 
    afterAll(async () => { 
     await driver.quit(); 
    }); 
    const searchBar:By = By.xpath('//inpu[@id = "twotabsearchtextbox" ]');
    const results: By = By.xpath('(//div[@class="sg-col-inner"])[3]')

    test('searching using xpath', async () => {
     await driver.findElement(searchBar).click();
     await driver.findElement(searchBar). sendKeys ("baby yoda\n");
     let realResults = await driver.findElement(results).getText();
    expect(realResults).toContain("The Child");
    });

});