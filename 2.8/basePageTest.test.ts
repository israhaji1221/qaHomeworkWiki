import {google} from './googlePageWBase';
const page = new google();
const fs = require('fs')
test('do a search', async () => {
    await page.navigate();
    await page.search('Silo');
    let text = await page.getResults();
    expect(text).toContain('Silo');
    fs.writeFile(`${__dirname}/testResults.txt`, text, (e) => {
        if (e) console.log(e); 
        else console.log('Save Successful');
    }); 
    fs.writeFile(`${__dirname}/google.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) =>{
        if (e) console.log(e);
        else console.log("Best show ever");
    });

    await page.driver.quit();
});