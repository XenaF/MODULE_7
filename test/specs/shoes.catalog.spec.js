const { expect } = require('chai');
const { HomePage } = require('../utils/pageObjects/homePage/homePage');
const { AllWomenBootsPage } = require('../utils/pageObjects/allWomenBootsPage/allWomenBootsPage');
const { BagPage } = require('../utils/pageObjects/bagPage/bagPage');
const { scrollToElement, clickByLinkText } = require('../utils/utils');

describe('find womens shoes in the catalog', () => {

  it('filter by women shoes', async () => {
    const homePage = new HomePage();
    await homePage.open();
    await homePage.headerNavigationList.clickElementByText('Women');
    await homePage.expandedHeaderNavigationList.clickElementByText('All Women\'s Boots');
    let allWomenBootsPage = new AllWomenBootsPage();
    expect(await allWomenBootsPage.pageTitle.getText()).to.equal('ALL WOMEN\'S BOOTS');
  });

  it('filter by conditions', async () => {
    const allWomenBootsPage = new AllWomenBootsPage();
    await allWomenBootsPage.filterSizeValues.clickElementByText('3');
    await allWomenBootsPage.filterColorMenu.clickElementByText('COLOR');
    await allWomenBootsPage.filterColorValues.clickElementByText('Black');
    expect(await allWomenBootsPage.filterResult.getText()).to.eql(['Black', '3']);
  });

  it('My bag page is displayed', async () => {
    const allWomenBootsPage = new AllWomenBootsPage();
    await allWomenBootsPage.filterResultImage.click();
    await scrollToElement('button#add-to-bag-button.button.button__primary');
    await allWomenBootsPage.addToBagButton.click();
    await allWomenBootsPage.reviewAndCheckoutButton.clickByButtonText('REVIEW BAG AND CHECKOUT');
    const bagPage = new BagPage();
    expect(await bagPage.bagPageTitle.getText()).to.equal('MY BAG');
    expect(await bagPage.productDetails.isDisplayed()).to.equal(true);
  });

  it('Paypal non-Angular action', async () => {
    const bagPage = new BagPage();
    await bagPage.payPalButton.click();
    await clickByLinkText('Cancel and return to DSW');
    expect(await bagPage.bagPageTitle.getText()).to.equal('MY BAG');
  });
});
