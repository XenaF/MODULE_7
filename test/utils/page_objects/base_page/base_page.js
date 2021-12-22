const { browser } = require("protractor");


class BasePage {
    constructor() {

    };

    async wait(waitInMillseconds) {
        return browser.sleep(waitInMillseconds);
    }

    async open(url) {
        // logger.info(`Opening "${url}" url`);
        await browser.get(url);
        await browser.sleep(10000);
    };

    async getTitle(element) {
        // logger.info(`Title is verified`);
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element), 5000);
        const currentTitle = await element.getTitle();
        return currentTitle.getTitle();
        // try {
        //     const currentTitle = await element.getTitle();
        //     return currentTitle.getTitle();
        // }
        // catch(StaleElementReferenceError) {
        //     const currentTitle = await element.getTitle();
        //     return currentTitle.getTitle();
        // }
     }
};

module.exports = BasePage;