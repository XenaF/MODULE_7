const { browser, $$, by } = require("protractor");

async function wait(waitInMillseconds) {
  await browser.sleep(waitInMillseconds);
}

async function scrollToElement(selector) {
  await wait(5000);
  const scrolldown = await $$(selector).get(0);
  await browser.controlFlow().execute(() => {
    browser.executeScript('arguments[0].scrollIntoView(true)', scrolldown.getWebElement());
  });
  await wait(10000);
}

async function clickByLinkText(text) {
  await wait(10000);
  let resultingLink = await browser.element(by.linkText(text));
  await resultingLink.click();
}

module.exports = {
  wait,
  scrollToElement,
  clickByLinkText
}
