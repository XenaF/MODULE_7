const { browser } = require("protractor");
const { wait } = require('../../utils');

class Collection {
     constructor(selectorType, selector) {
        switch (selectorType) {
           case 'css': this.collection = element.all(by.css(selector));
            break;
           case 'className': this.collection = element.all(by.className(selector));
             break;
           default: this.collection = element.all(by.xpath(selector));
        }
    };

    async getText() {
<<<<<<< Updated upstream:test/utils/page_objects/base_elements/base_collection.js
        const arrayOfCollectionTexts = await this.collection.getText();
       // logger.info(`Texts of collection's elements are [${arrayOfCollectionTexts}]`);
=======
        const arrayOfCollectionTexts = [];
        await wait(10000);
        await this.collection.each(async el => {
          arrayOfCollectionTexts.push(await el.getText());
        });
>>>>>>> Stashed changes:test/utils/pageObjects/baseElements/baseCollection.js
        return arrayOfCollectionTexts;
    }

    async clickElementByText(textToClick) {
        const textsArray = await this.getText();
        const elementToClickIndex = textsArray.indexOf(textToClick);
        if (elementToClickIndex === -1) {
          throw new Error(`No element with [${textToClick}] text found!`);
        }
<<<<<<< Updated upstream:test/utils/page_objects/base_elements/base_collection.js
        // logger.info(`Clicking "${textToClick}" text in "${this.elementName}"`);
        try {
            await this.collection.get(elementToClickIndex).click();
        }
        catch(StaleElementReferenceError) {
            await this.collection.get(elementToClickIndex).click();
        }
        
    }
=======
        const el = this.collection.get(elementToClickIndex);
        await wait(10000);
        await el.click();
      }
>>>>>>> Stashed changes:test/utils/pageObjects/baseElements/baseCollection.js
}
module.exports = Collection;