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
        const currentTitle = await element.getTitle();
        return currentTitle;
     }
};

module.exports = BasePage;