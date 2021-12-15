const { browser } = require("protractor");


class BasePage {
    constructor() {

    };

    async wait(waitInMillseconds) {
        return browser.sleep(waitInMillseconds);
    }

    async open(url) {
        // logger.info(`Opening "${url}" url`);
        return browser.get(url);
    };
};

module.exports = BasePage;