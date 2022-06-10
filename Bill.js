const { until } = require('selenium-webdriver');
const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function scrap(){
    try{
        let options = new chrome.Options();

        options.addArguments("--incognito");

        let driver = await new Builder()
                        .setChromeOptions(options)
                        .forBrowser('chrome')
                        .build();
                    

        await driver.get('https://www.youscribe.com/catalogue/documents/litterature/trophee-des-plumes/trophee-des-plumes-2022-plus-jamais-ca--3290828?ni=1');

        // driver.manage().setTimeouts({implicit: 60000});

        // let vote = await driver.findElement(By.css('input[value="Voter"]'));

        let vote = await driver.wait(until.elementLocated(By.css('input[value="Voter"]')), 60000);

        await vote.click();

        // await driver.quit();

    }catch(error){
        console.log(error);
    }
}

for(let i = 0; i <= 40; i++){
    scrap();
}

//https://www.youscribe.com/catalogue/documents/litterature/trophee-des-plumes/trophee-des-plumes-2022-plus-jamais-ca--3290828?ni=1

// scrap();

