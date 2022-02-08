const { browser } = require("protractor");

async function scrollToElement(selector) {
    await wait(5000);
    var scrolldown = await $$(selector).get(0);
    await browser.controlFlow().execute(function() {
    browser.executeScript('arguments[0].scrollIntoView(true)', scrolldown.getWebElement());
  });
    await wait(10000);
}

async function clickByLinkText(text) {
    await wait(5000);
    let resultingLink = await browser.element(by.linkText(text));
     await resultingLink.click();
 }

 async function clickByButtonText(text) {
    await wait(5000);
    let resultingButton = await browser.element(by.buttonText(text));
    return resultingButton.click();
}

async function wait(waitInMillseconds) {
    return browser.sleep(waitInMillseconds);
}

module.exports = {
  scrollToElement,
  clickByLinkText,
  clickByButtonText,
  wait
}
