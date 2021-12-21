const Collection = require('../base_elements/base_collection');

class Filter extends Collection {
    constructor() {
        super();
        this.filterSizeValues = new Collection('className', 'select-box__option ng-star-inserted');
        this.filterColorMenu = new Collection('className', 'dsw-accordion__label'); 
        this.filterColorValues = new Collection('className', 'exposed-filter__checkbox__label');
        this.filterResult = new Collection('className', 'active-filters__filter ng-star-inserted');
    };
    
    async getText() {
       // logger.info(`Texts of collection's elements are [${arrayOfCollectionTexts}]`);
        let filterText = await super.getText();
        return filterText;
}

}
module.exports = Filter;