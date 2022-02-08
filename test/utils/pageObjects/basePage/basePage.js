const { browser } = require("protractor");


class BasePage {
    constructor() {
    }

    async open(url) {
        await browser.get(url);
        await browser.sleep(10000);
    };
};

module.exports = BasePage;