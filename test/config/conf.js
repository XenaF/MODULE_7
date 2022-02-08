const {SpecReporter} = require ("jasmine-spec-reporter");
exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  specs: ['../specs/shoes.catalog.spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 200000,
    print: function () {},
  },

  onPrepare: async function() {
    await browser.waitForAngularEnabled(false);
    await browser.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new SpecReporter({
        suite: {
          displayNumber: true, 
        },
        spec: {
          displayPending: true, 
          displayDuration: true, 
        },
        summary: {
          displaySuccesses: false, 
          displayFailed: false,   
          displayPending: false,  
        },
      })
    );
  }
};
