const { BasePage } = require('../basePage/basePage');
const { Element } = require('../baseElements/baseElement');

class BagPage extends BasePage {
  constructor() {
    super();
    this.bagPageTitle = new Element('className', 'title3 checkout-banner__title');
    this.productDetails = new Element('className', 'product-module__details');
    this.payPalButton = new Element('xpath', '//*[@id="mainContainer"]/app-cart-checkout-routing/div/app-shopping-bag/div/div/div/div[3]/div/app-paypal-express-button/button');
  }
}

module.exports = { BagPage }
