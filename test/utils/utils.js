const { browser } = require("protractor");

<<<<<<< Updated upstream
// async function waitForElement(element, waitTimeoutMilliseconds){
//   return browser.wait(function() { 
//     return element.isPresent(); 
//   }, waitTimeoutMilliseconds)
//   .then(function() {
//      return browser.wait(function() { 
//        return element.isDisplayed(); 
//       }, waitTimeoutMilliseconds);
//   });
// }

// module.exports = {
//   waitForElement
// }
=======
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
>>>>>>> Stashed changes
