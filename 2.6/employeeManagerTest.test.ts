import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
  }

  describe("Employee Manager Test", () => {
      beforeEach(async () => {
          await employeePage.Navigate();
      })
      afterAll(async () => {
          await driver.quit()
      })
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(employeePage.header))
          await driver.findElement(employeePage.addEmployee).click()
          await driver.findElement(employeePage.newEmployee).click()
          await driver.findElement(employeePage.nameInput).click()
          await driver.findElement(employeePage.nameInput).clear()
          await driver.findElement(employeePage.nameInput).sendKeys("Change this")
          await driver.findElement(employeePage.phoneInput).click()
          await driver.findElement(employeePage.phoneInput).clear()
          await driver.findElement(employeePage.phoneInput).sendKeys("Change this")
          await driver.findElement(employeePage.titleInput).click()
          await driver.findElement(employeePage.titleInput).clear()
          await driver.findElement(employeePage.titleInput).sendKeys("Change this")
  });

  /* this is a commment */