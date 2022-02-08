const BasePage = require('../basePage/basePage');
const Collection = require('../baseElements/baseCollection');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.dsw.com/en/us/';
        this.headerNavigationList = new Collection('className', 'header-navigation-list__component ng-tns-c128-2 ng-star-inserted');
        this.expandedHeaderNavigationList = new Collection('className', 'header-link-group__links__link ng-tns-c125-5 ng-star-inserted');
    };

    async open() {
        await super.open(this.url);
    }

    async wait(waitInMillseconds) {
        return super.wait(waitInMillseconds);
    }
    
    async getTitle() {
        const homeTitle = await super.getTitle();
        return homeTitle;
     }
};

module.exports = HomePage;