const { element, by } = require("protractor");
const { wait } = require("../../utils");

class Collection {
  constructor(selectorType, selector) {
    this.collection = element.all(by[selectorType](selector));
  }

  async getText() {
    const arrayOfCollectionTexts = [];
    await wait(10000);
    await this.collection.each(async el => {
      arrayOfCollectionTexts.push(await el.getText());
    });

    return arrayOfCollectionTexts;
  }

  async clickElementByText(textToClick) {
    const textsArray = await this.getText();
    const elementToClickIndex = textsArray.indexOf(textToClick);
    if (elementToClickIndex === -1) {
      throw new Error(`No element with [${textToClick}] text found!`);
    }
    const el = this.collection.get(elementToClickIndex);
    await wait(10000);
    await el.click();
  }
}

module.exports = { Collection }