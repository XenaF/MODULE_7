class Collection {
    constructor(selectorType, selector) {
        if (selectorType === 'css') {
            this.collection = element.all(by.css(selector));
        } else  if (selectorType === 'className') {
            this.collection = element.all(by.className(selector));
        } else {
            this.collection = element.all(by.xpath(selector));
        }
    };

    async getCount() {
        return this.collection.count();
    };

    async getTexts() {
        const arrayOfCollectionTexts = await this.collection.getText();
        logger.info(`Texts of collection's elements are [${arrayOfCollectionTexts}]`);
        return arrayOfCollectionTexts;
    };
    async clickElementByText(textToClick) {
        console.log(this.collection);
        const arrayOfElementTexts = await this.collection.getText();
        console.log(arrayOfElementTexts);
        const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
        if (elementToClickIndex === -1) {
            throw new Error(`No element with [${textToClick}] text found!`);
        }
        logger.info(`Clicking "${textToClick}" text in "${this.elementName}"`);
        return this.collection.get(elementToClickIndex).click();
    };

}
module.exports = Collection;