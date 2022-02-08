//const { expect } = require('chai');
const HomePage = require('../utils/pageObjects/homePage/homePage');
const AllWomenBootsPage = require('../utils/pageObjects/allWomenBootsPage/allWomenBoots');
const BagPage = require('../utils/pageObjects/bagPage/bagPage');
const { scrollToElement, clickByLinkText, clickByButtonText,wait } = require('../utils/utils');
 
 describe('find womens shoes in the catalog', function(){

    it('filter by women shoes', async function() {
        let homePage = new HomePage();
        await homePage.open();
        await homePage.headerNavigationList.clickElementByText('Women');
        await homePage.expandedHeaderNavigationList.clickElementByText('All Women\'s Shoes');
        let allWomenBootsPage = new AllWomenBootsPage();
        expect(await allWomenBootsPage.pageTitle.getText()).toEqual('WOMEN\'S SHOES');
    });

    it('filter by conditions', async function() {
        let allWomenBootsPage = new AllWomenBootsPage();
        await allWomenBootsPage.filterSizeValues.clickElementByText('3');
        await allWomenBootsPage.filterColorMenu.clickElementByText('COLOR');
        await allWomenBootsPage.filterColorValues.clickElementByText('Black');
        expect(await allWomenBootsPage.filterResult.getText()).toEqual(['Black', '3']);
    });

    it('My bag page is displayed', async function() {
        let allWomenBootsPage = new AllWomenBootsPage();
        await allWomenBootsPage.filterResultImage.click();
        await scrollToElement('button#add-to-bag-button.button.button__primary');
        await allWomenBootsPage.addToBagButton.click();
        await clickByButtonText('REVIEW BAG AND CHECKOUT');
        let bagPage = new BagPage();
        expect(await bagPage.bagPageTitle.getText()).toEqual('MY BAG');
        expect(await bagPage.productDetails.isDisplayed()).toBeTruthy();
        });

    it('Paypal non-Angular action', async function() {
        let bagPage = new BagPage();
        await bagPage.payPalButton.click();
        await clickByLinkText('Cancel and return to DSW');
        expect( bagPage.bagPageTitle.getText()).toEqual('MY BAG');
    });
});

 
  