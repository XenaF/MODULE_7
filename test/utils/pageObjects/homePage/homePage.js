const { BasePage } = require('../basePage/basePage');
const { Collection } = require('../baseElements/baseCollection');

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = 'https://www.dsw.com/en/us/';
    this.headerNavigationList = new Collection('css', '#megaNavList a');
    this.expandedHeaderNavigationList = new Collection('css', 'app-header-link-group a');
  }
}

module.exports = { HomePage }

