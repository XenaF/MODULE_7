const BasePage = require('../base_page/base_page');
const Collection = require('../base_elements/base_collection');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.dsw.com/en/us/';
        this.headerNavigationList = new Collection('className', 'header-navigation-list__component ng-tns-c129-2 ng-star-inserted');
        this.expandedHeaderNavigationList = new Collection ('css', '.component-flyout');
        
    };
    async open() {
        return super.open (this.url);
    }
    
};

module.exports = HomePage;