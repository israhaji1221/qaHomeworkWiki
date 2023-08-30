import {By} from 'selenium-webdriver'; 
import { BasePage } from './basePage';

export class google extends BasePage {
    searchBar: By = By.name('q'); 
    results: By = By.id('rcnt'); 
    constructor() {
        super({url: 'https://www.google.com'}); 
    };
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n)`);
    };
    async getResults() {
        return this.getText(this.results)
    };
};