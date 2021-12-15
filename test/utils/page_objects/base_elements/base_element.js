const { browser } = require("protractor");

class Element {
    constructor (selectorType, selector) {
        if (selectorType === 'css') {
            this.element = element(by.css(selector));
        } else {
            this.element = element(by.xpath(selector));
        }
    };

    async click() {
        await this.element.click();
    };

    getText() {
        return this.element.getText();
    };

    async scrollToElement(element) {
        await browser.controlFlow().execute(async () => {
            await browser.executeScript('arguments[0].scrollIntoView(true)', element);
        })
        await browser.sleep(1000);
        return this.element.scrollToElement(element);
      }
      
};

module.exports = Element;