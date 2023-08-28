import {Builder, By, Capabilities, WebDriver, WebElement, until} from 'selenium-webdriver'; 
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

class employeePO {
    driver: WebDriver;
    url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'; 
    header: By = By.css('.titleText');
    employees: By = By.css('.listContainer');
    addEmployees: By = By.css('[name="addEmployee]');
    newEmployees: By = By.xpath('(//li[@class="listText"])[11]');
    nameInput: By = By.name('nameEntry');
    phoneInput: By = By.name('phoneEntry');
    titileInput: By = By.name('titleEntry');
    saveBtn: By = By.id('saveBtn');
    constructor(driver: WebDriver) {
        this.driver = driver; 
    };
    async navigate() { 
        await this.driver.get(this.url); 
        await this.driver.wait(until.elementLocated(this.header)); 
    };
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return (await this.driver.findElement(elementBy)).click();
    };
    async sendKeys(elementBy: By, Key: any) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).sendKeys(Key); 
    };
    async getText(elementBy: By) {
        await this.driver.wait(until.elementsLocated(elementBy)); 
        return this.driver.findElement(elementBy).getText(); 
    }; 
}

const emPage = new employeePO(driver)

describe("Practicing Page Object Models", () => {
    beforeEach(async () => {
        await emPage.navigate()
    }); 
    afterAll(async() => {
        await emPage.driver.quit()
    }); 
    
    test('adding employees', async () => {
        await emPage.click(emPage.addEmployees); 
        await emPage.click(emPage.newEmployees); 
        await emPage.click(emPage.nameInput); 
        await emPage.driver.findElement(emPage.nameInput).clear(); 
        await emPage.sendKeys(emPage.nameInput, 'Bob the Builder'); 
        await emPage.click(emPage.phoneInput); 
        await emPage.driver.findElement(emPage.phoneInput).clear();
        await emPage.sendKeys(emPage.phoneInput, 8018000000);
        await emPage.click(emPage.titileInput);
        await emPage.driver.findElement(emPage.titileInput).clear();
        await emPage.sendKeys(emPage.titileInput, 'The Fixer');
        await emPage.click(emPage.saveBtn);
    });
})