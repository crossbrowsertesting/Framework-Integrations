// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://crossbrowsertesting.github.io/todo-app.html');
    expect(browser.getTitle()).toEqual('Todo App - CrossBrowserTesting.com');
  });
});
