const assert = require("assert");
const access= require('../testdata/testdata.js')
const CompanyNameGenerator= function () {
  const values = Object.keys(access.company)
  const randomValue = values[parseInt(Math.random() * values.length)]
  return randomValue
};

describe("Weekly Report",  function() {


    it("Login Demo TestCase",  function(done){
        this.timeout(300000); // 5 minutes
        browser.url(`https://develop.fullscale.rocks/login`);
        browser.maximizeWindow();
        //** login page */
        $(`*[name="email"]`).click();
        $(`*[name="email"]`).setValue(`gbobilles@fullscale.io`);
        $(`*[name="password"]`).click();
        $(`*[name="password"]`).setValue(`E7c%H451@%$b`);  
        $(`[class="btn btn-success btn-block"]`).click();
        //** clicking weekly report tile */
        $(`//span[contains(text(),'Weekly Floor Report')]`).click()
        //** choose a client */
        $(`[id="select-client_id"]`).waitForClickable({ timeout: 270000 });
        $(`[id="select-client_id"]`).selectByVisibleText(`${CompanyNameGenerator()}`)
        $(`[class="btn button btn-success"]`).click()
        $(`[class="btn button btn-success"]`).waitForDisplayed({ timeout: 270000 });

        //** Step 2 */
        $(`//span[contains(text(),'Yes')]`).click();
        let Step2 = $(`*[id="textarea-2"]`).isExisting()
        assert.strictEqual(Step2, false)
        // expect($(`*[id="textarea-2"]`)).toBeDisplayed();
        browser.pause(2000);
        $(`//span[contains(text(),'No')]`).click();
        expect($(`*[id="textarea-2"]`)).toBeDisplayed();
        $(`*[id="textarea-2"]`).click();
        $(`*[id="textarea-2"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-3"]`).click();
        $(`*[id="textarea-3"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-4"]`).click();
        $(`*[id="textarea-4"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-5"]`).click();
        $(`*[id="textarea-5"]`).setValue(access.textAreaString); 
        $(`//button[contains(text(),'Next')]`).click();

        //** Step 3 */
        $$(`//span[contains(text(),'Yes')]`)[0].click();
        let Step3a = $(`*[id="textarea-7"]`).isExisting()
        assert.strictEqual(Step3a, false)
        browser.pause(200);
        $$(`//span[contains(text(),'No')]`)[0].click();
        expect($(`*[id="textarea-7"]`)).toBeDisplayed();
        $(`*[id="textarea-7"]`).click();
        $(`*[id="textarea-7"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-8"]`).click();
        $(`*[id="textarea-8"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-9"]`).click();
        $(`*[id="textarea-9"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-10"]`).click();
        $(`*[id="textarea-10"]`).setValue(access.textAreaString); 
        $$(`//span[contains(text(),'No')]`)[1].click();
        let Step3b = $(`*[id="textarea-12"]`).isExisting()
        assert.strictEqual(Step3b, false)
        $$(`//span[contains(text(),'Yes')]`)[1].click();
        expect($(`*[id="textarea-12"]`)).toBeDisplayed();
        $(`*[id="textarea-12"]`).click();
        $(`*[id="textarea-12"]`).setValue(access.textAreaString);
        $(`*[id="textarea-13"]`).click();
        $(`*[id="textarea-13"]`).setValue(access.textAreaString);
        $(`*[id="textarea-14"]`).click();
        $(`*[id="textarea-14"]`).setValue(access.textAreaString);
        $(`//button[contains(text(),'Next')]`).click();

        //** Step 4 */
        $(`//span[contains(text(),'Yes')]`).click();
        let Step4a = $(`*[id="textarea-16"]`).isExisting()
        assert.strictEqual(Step4a, false)
        browser.pause(200);
        $(`//span[contains(text(),'No')]`).click();
        expect($(`*[id="textarea-16"]`)).toBeDisplayed();
        $(`*[id="textarea-16"]`).click();
        $(`*[id="textarea-16"]`).setValue(access.textAreaString);
        $(`*[id="textarea-17"]`).click();
        $(`*[id="textarea-17"]`).setValue(access.textAreaString);
        $(`//span[contains(text(),'Ahead')]`).click();
        let Step4b = $(`*[id="textarea-19"]`).isExisting()
        assert.strictEqual(Step4b, false);
        browser.pause(200);
        $(`//span[contains(text(),'Behind')]`).click();
        expect($(`*[id="textarea-19"]`)).toBeDisplayed();
        $(`*[id="textarea-19"]`).click();
        $(`*[id="textarea-19"]`).setValue(access.textAreaString);
        $(`*[id="textarea-20"]`).click();
        $(`*[id="textarea-20"]`).setValue(access.textAreaString);
        $(`*[id="textarea-21"]`).click();
        $(`*[id="textarea-21"]`).setValue(access.textAreaString);
        $(`*[id="textarea-22"]`).click();
        $(`*[id="textarea-22"]`).setValue(access.textAreaString);
        $(`//button[contains(text(),'Next')]`).click();

        //** Finish */
        $$(`//span[contains(text(),'No')]`)[0].click();
        let Step5a = $(`*[id="textarea-28"]`).isExisting()
        assert.strictEqual(Step5a, true)
        browser.pause(2000);
        $$(`//span[contains(text(),'Yes')]`)[0].click();
        expect($(`*[id="textarea-24"]`)).toBeDisplayed();
        $(`*[id="textarea-24"]`).click();
        $(`*[id="textarea-24"]`).setValue(access.textAreaString);
        $(`*[id="textarea-25"]`).click();
        $(`*[id="textarea-25"]`).setValue(access.textAreaString);
        $(`*[id="textarea-26"]`).click();
        $(`*[id="textarea-26"]`).setValue(access.textAreaString);
        $(`*[id="textarea-27"]`).click();
        $(`*[id="textarea-27"]`).setValue(access.textAreaString);
        browser.pause(2000);
        $$(`//span[contains(text(),'No')]`)[1].click();
        let Step5b = $(`*[id="textarea-30"]`).isExisting()
        assert.strictEqual(Step5b, false)
        $$(`//span[contains(text(),'Yes')]`)[1].click();
        expect($(`*[id="textarea-30"]`)).toBeDisplayed();
        $(`*[id="textarea-30"]`).click();
        $(`*[id="textarea-30"]`).setValue(access.textAreaString);
        $(`*[id="textarea-31"]`).click();
        $(`*[id="textarea-31"]`).setValue(access.textAreaString);
        $(`*[id="textarea-32"]`).click();
        $(`*[id="textarea-32"]`).setValue(access.textAreaString);
        $(`*[id="textarea-33"]`).click();
        $(`*[id="textarea-33"]`).setValue(access.textAreaString);
        $(`//button[contains(text(),' Submit ')]`).click();
        browser.pause(40000)
        
    });
});
