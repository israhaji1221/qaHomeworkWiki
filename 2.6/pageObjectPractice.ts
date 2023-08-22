import {By, until, WebDriver, WebElement} from 'selenium-webdriver'; 
import { elementTextContains } from 'selenium-webdriver/lib/until';
const chromedriver = require('chromedriver'); 

export class googlePage {
    driver: WebDriver; 
    url: string = 'https://wwww.google.com'; 
    searchBar: By = By.name('q')
    results: By = By.xpath('//div[@class = "main"]'); 
    constructor(driver: WebDriver, url: string) {
        this.driver = driver; 
        this.url = url; 
    }
    //methods
    async navigate() { 
        await this.driver.get(this.url); 
        await this.driver.wait(until.elementLocated(this.searchBar)); 
    }; 
    async getElement(elementBy: By): Promise<WebElement> { 
        await this.driver.wait(until.elementLocated(elementBy)); 
        let element = await this.driver.findElement(elementBy); 
        await this.driver.wait(until.elementIsVisible(element)); 
        return element; 
    }
    async sendKeys(elementBy: By, keys: any) { 
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).sendKeys(keys)  
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy); 
        return input.sendKeys(keys); 
    }
    async search(searchterm: string) { 
        return this.setInput(this.searchBar, `${searchterm}\n`); 
    }
    async getText(elementBy: By) { 
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).getText()
        }
    async getResults(){ 
        return this.getText(this.results)
    }
}