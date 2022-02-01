<<<<<<< Updated upstream:test/utils/page_objects/base_page/filter.js
const Collection = require('../base_elements/base_collection');
=======
// const Collection = require('../baseElements/baseCollection');
// const BasePage = require('../basePage/basePage');
>>>>>>> Stashed changes:test/utils/pageObjects/basePage/filter.js

// class Filter extends BasePage {
//     constructor() {
//         super();
//         this.filterSizeValues = new Collection('className', 'select-box__option ng-star-inserted');
//         this.filterColorMenu = new Collection('className', 'dsw-accordion__label'); 
//         this.filterColorValues = new Collection('xpath', '//div[@class="exposed-filter__checkbox__label"]/span[text()="Black"]');
//         this.filterResult = new Collection('className', 'active-filters__filter ng-star-inserted');
//     };
    
<<<<<<< Updated upstream:test/utils/page_objects/base_page/filter.js
    async getText() {
       // logger.info(`Texts of collection's elements are [${arrayOfCollectionTexts}]`);
        let filterText = await super.getText();
        return filterText;
}
=======
//     async getText() {
//         let filterText = await super.getText();
//         return filterText;
// }
>>>>>>> Stashed changes:test/utils/pageObjects/basePage/filter.js

// }
// module.exports = Filter;