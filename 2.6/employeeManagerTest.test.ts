import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");
  const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
      header: By = By.css('.titleText');
      employees: By = By.css('.listContainer');
      addEmployees: By = By.css('name="addEmployee');
      newEmployees: By = By.xpath('(//li[@class="listText"])[11])');
      nameInput: By = By.name('[name="nameEntry"]');
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

const emPage = new employeePage(driver)


  describe("Employee Manager Test", () => {
      beforeEach(async () => {
          await emPage.navigate();
      });
      afterAll(async () => {
          await driver.quit();
      });

      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(employeePage.header));
          await driver.findElement(employeePage.addEmployee).click();
          await driver.findElement(employeePage.newEmployee).click();
          await driver.findElement(employeePage.nameInput).click();
          await driver.findElement(employeePage.nameInput).clear();
          await driver.findElement(employeePage.nameInput).sendKeys("Bob the Builder");
          await driver.findElement(employeePage.phoneInput).click();
          await driver.findElement(employeePage.phoneInput).clear();
          await driver.findElement(employeePage.phoneInput).sendKeys("8018000000");
          await driver.findElement(employeePage.titleInput).click();
          await driver.findElement(employeePage.titleInput).clear();
          await driver.findElement(employeePage.titleInput).sendKeys("The Fixer");
      });
  
    });

  /* this is a commment */