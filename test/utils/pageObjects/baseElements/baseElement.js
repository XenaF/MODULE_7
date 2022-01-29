const { browser, by, element, ExpectedConditions } = require("protractor");
const { wait } = require("../../utils");
const EC = ExpectedConditions;

class Element {
  constructor(selectorType, selector) {
    this.element = element(by[selectorType](selector));
  }

  async click() {
    await wait(5000);
    browser.wait(EC.elementToBeClickable(this.element), 5000);
    await this.element.click();
  }

  async getText() {
    await wait(10000);

    return this.element.getText();
  }

  async clickByButtonText(text) {
    await wait(5000);
    let resultingButton = await browser.element(by.buttonText(text));

    resultingButton.click();
  }

  isDisplayed() {
    return this.element.isDisplayed();
  }
}

module.exports = { Element }
