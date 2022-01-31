const { browser } = require("protractor");

class Element {
    constructor (selectorType, selector) {
        if (selectorType === 'css') {
            this.element = element(by.css(selector));
        } else if (selectorType === 'className') {
            this.element = element(by.className(selector));
        } else {
           this.element = element(by.xpath(selector));
        }
    };

    async click() {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(this.element), 5000);
        await this.element.click();
    };

    async getText() {
        const textElement = await this.element.getText();
        return textElement;
    };

    async isDisplayed() {
        return this.element.isDisplayed();

    }
};

module.exports = Element;