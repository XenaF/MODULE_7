const HomePage = require('../utils/pageObjects/homePage/homePage');
const Filter = require('../utils/pageObjects/basePage/filter');
const AllWomenBootsPage = require('../utils/pageObjects/homePage/allWomenBoots');
const BagPage = require('../utils/pageObjects/homePage/bagPage');
const { scrollToElement, clickByLinkText, clickByButtonText, wait } = require('../utils/utils');
 
 describe('find womens shoes in the catalog', function(){

    it('filter by women shoes', async function() {
        let homePage = new HomePage();
        await homePage.open();
        await homePage.headerNavigationList.clickElementByText('Women');
        await homePage.expandedHeaderNavigationList.clickElementByText('All Women\'s Shoes');
        let allWomenBootsPage = new AllWomenBootsPage();
        expect(allWomenBootsPage.getTitle(allWomenBootsPage.pageTitle)).toEqual('ALL WOMEN\'S BOOTS');
    });

    it('filter by conditions', async function() {
        let allWomenBootsPage = new AllWomenBootsPage();
        await wait(10000);
        let filter = new Filter();
        await filter.filterSizeValues.clickElementByText('3');
        await wait(10000);
        await filter.filterColorMenu.clickElementByText('COLOR');
        await filter.filterColorValues.clickElementByText('Black');;
        let filterResult = new Filter();
        expect(filterResult.getText()).toEqual('Black', '3');
    });

    it('My bag page is displayed', async function() {
        let allWomenBootsPage = new AllWomenBootsPage();
        await wait(10000);
        await allWomenBootsPage.filterResult.click();
        await wait(10000);
        await scrollToElement('button#add-to-bag-button.button.button__primary');
        await wait(10000);
        await allWomenBootsPage.addToBagButton.click();
        await wait(10000);
        await clickByButtonText('REVIEW BAG AND CHECKOUT');
        await wait(10000);
        let bagPage = new BagPage();
        expect(bagPage.getTitle(bagPage.bagPageTitle)).toEqual('MY BAG');
        expect(bagPage.productDetails.isDisplayed()).toBeTruthy();
        });

 it('Paypal non-Angular action', async function() {
    let bagPage = new BagPage();
    await bagPage.payPalButton.click();
    await wait(10000); 
    await clickByLinkText('Cancel and return to DSW');
    expect(bagPage.getTitle(bagPage.bagPageTitle)).toEqual('MY BAG');
});
 });

 
  