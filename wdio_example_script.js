var webdriverio = require('webdriverio');
var options = {
  desiredCapabilities: {
    name: 'Selenium Test Example',
    build: '1.0',
    browser_api_name: "FF45",
    os_api_name: "Win10",
    browserName: 'firefox'
  },
  host: "hub.crossbrowsertesting.com",
  port: 80,
  user: 'yourusername@yourcompany.com',
  key: 'yourauthkey'      // find this under the "Manage Account page of our app"
}

// create your webdriverio.remote with your options as an argument
var client = webdriverio.remote(options);

client
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
        // outputs: "Title is: Google
    })
    .end();
