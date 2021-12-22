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

    async scrollToElement(element) {
        var scrolldown = await $$(element).get(1);
        await browser.controlFlow().execute(function() {
        browser.executeScript('arguments[0].scrollIntoView(true)', scrolldown.getWebElement());
      });
      await browser.sleep(10000);
    };

    async clickByButtonText(element) {
        let resultingButton = await browser.element(by.buttonText(element));
        return resultingButton.click();
    }

    async isDisplayed() {
        return this.element.isDisplayed();

    }
    async clickByLinkText(element) {
        let resultingLink = await browser.element(by.linkText(element));
         await resultingLink.click();
     }
};

module.exports = Element;