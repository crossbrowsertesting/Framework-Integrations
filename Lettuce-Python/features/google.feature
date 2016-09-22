Feature: Go to google

Scenario: Visit Google
  Given I go to "http://crossbrowsertesting.github.io/selenium_example_page.html"
    The title of the page should become "Selenium Test Example Page"
