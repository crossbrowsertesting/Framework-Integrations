// spec.js
describe('Protractor Demo App 2', function() {
  it('should have a title', function() {
    browser.get('http://www.crossbrowsertesting.com');
    expect(browser.getTitle()).toEqual('Selenium Test Example Page');
  });
});
