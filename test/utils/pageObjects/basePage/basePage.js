const { browser } = require("protractor");


class BasePage {
    constructor() {
    }

    async open(url) {
        await browser.get(url);
        await browser.sleep(10000);
    };

    // async getTitle(element) {
    //     var EC = protractor.ExpectedConditions;
    //     browser.wait(EC.visibilityOf(element), 5000);
    //     const currentTitle = await element.getTitle();
    //     return currentTitle.getText();
    //  }
};

module.exports = BasePage;