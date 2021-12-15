const Collection = require('../base_elements/base_collection');
const Element = require('../base_elements/base_element');


class Filter {
    constructor() {
        this.sizeFilter = new Collection('css', '[for="exposed-filter-size-input"]');
        this.colorFilter = new Collection('css', '[for="exposed-filter-color-input"]');
        this.sizeOfThree = new Element ('css', '.select-box > button:nth-of-type(2)');
        this.colorBlack = new Element ('css', '[for="filter-0"] span:nth-of-type(2)');
    };

    clickToSelectSize(){
        // logger.info(`Click to select size`);
        return this.sizeFilter.click();
    };

    clickToSelectColor(){
        // logger.info(`Click to select size`);
        return this.sizeFilter.click();
    };

    
}

module.exports = Filter;