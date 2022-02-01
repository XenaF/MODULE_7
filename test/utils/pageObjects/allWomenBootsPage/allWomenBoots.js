const BasePage = require("../basePage/basePage");
const Element = require('../baseElements/baseElement');
const Collection = require('../baseElements/baseCollection');


class AllWomenBootsPage extends BasePage {
    constructor() {
        super();
        this.pageTitle = new Element ('className', 'title5 result-list__toolbar__left__header hide-mobile-down');
        this.filterResultImage = new Element('css', '[src="https://images.dsw.com/is/image/DSWShoes/512085_001_ss_01?impolicy=colpg&imwidth=800&imdensity=1"]');
        this.addToBagButton = new Element('xpath', '//button[@id="add-to-bag-button"]');
        this.reviewAndCheckoutButton = new Element('css', 'button#atb-review-and-checkout-button.button.button__primary.ng-tns-c84-18');
        this.bagTitle = new Element('className', 'title3 checkout-banner__title');
        this.filterSizeValues = new Collection('className', 'select-box__option ng-star-inserted');
        this.filterColorMenu = new Collection('className', 'dsw-accordion__label'); 
        this.filterColorValues = new Collection('xpath', '//div[@class="exposed-filter__checkbox__label"]/span[text()="Black"]');
        this.filterResult = new Collection('className', 'active-filters__filter ng-star-inserted');
    };
}

module.exports = AllWomenBootsPage;