import {google} from './googlePageWBase';
const page = new google();
const fs = require('fs')
test('do a search', async () => {
    await page.navigate();
    await page.search('pizza near me');
    let text = await page.getResults();
    expect(text).toContain('pizza');
    fs.writeFile(`${__dirname}/testResults.txt`, text, (e) => {
        if (e) console.log(e); 
        else console.log('Save Successful');
    }); 
    fs.writeFile(`${__dirname}/google.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) =>{
        if (e) console.log(e);
        else console.log("a picture if worth a thousand words");
    });

    await page.driver.quit();
});