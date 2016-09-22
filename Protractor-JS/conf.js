exports.config = {

  // change this to your USERNAME and AUTHKEY
  seleniumAddress: 'http://you@yourdomain.com:yourauthkey@hub.crossbrowsertesting.com:80/wd/hub',

  capabilities : {
    
    // this will show up in the UI
    name : 'Selenium-Protractor',

    // these are important :)
    browser_api_name : 'Chrome53x64', // change this according to what browser you are using
    browserName: 'chrome', // change this according to what browser you are using 'internet explorer', 'chrome' etc
    os_api_name : 'Win10', // change this for the OS you are using
    screen_resolution : '1024x768', // change this for the resolution

    // optional recording capabilities
    record_video : 'true',
    record_network : 'false',
    record_snapshot : 'false',

    // change this to your USERNAME and AUTHKEY
    username :  "you@yourdomain.com",
    password : "yourauthkey"

  },
  //
  specs: ['todo-spec.js']
};
