exports.config = {

  // change this to your USERNAME and AUTHKEY
  seleniumAddress: 'http://<yourusername>:<yourauthkey>@hub.crossbrowsertesting.com:80/wd/hub',

  // add more browsers to this array for more parllel tests!!
  capabilities: {
    shardTestFiles: true, 
    maxInstances: 2,       
 
    // Cloud capabilities
    user: <yourusername>,
    password: <yourauthkey>,
     
    // Device capabilities
    name: 'Parallel Spec Example', 
    browser_api_name : 'IE10', 
    os_api_name : 'Win7x64-C2', 
    browserName: 'internet explorer',
    record_video: 'true',
    record_network: 'true'
  },
  
  specs: ['./test/spec.js', 'test/spec2.js']
};
