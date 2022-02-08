const { browser, element, by } = require("protractor");
const { wait } = require("../../utils");

class Element {

    constructor(selectorType, selector) {
        switch (selectorType) {
           case 'css': this.element = element(by.css(selector));
            break;
           case 'className': this.element = element(by.className(selector));
             break;
           default: this.element = element(by.xpath(selector));
        }
    }

    async click() {
        await wait(5000);
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(this.element), 5000);
        await this.element.click();
    };

    async getText() {
        await wait(5000);
        return this.element.getText();
        
    };

    async scrollToElement(element) {
        var scrolldown = await $$(element).get(0);
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