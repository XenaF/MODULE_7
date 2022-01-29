const { browser } = require("protractor");


class BasePage {
  constructor() {
  }

  async open() {
    await browser.get(this.url);
    await browser.sleep(10000);
  }
}

module.exports = { BasePage }
