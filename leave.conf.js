module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["./tests"],

  // See https://nightwatchjs.org/guide/working-with-page-objects/
  page_objects_path: ['page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
  custom_commands_path:  '',

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-assertions
  custom_assertions_path: '',

  // See https://nightwatchjs.org/guide/#external-globals
  globals_path : '',

  output_folder: "test-reports-system",
  selenium: {
    start_process: true,
    server_path: "./server/selenium-server-standalone-3.141.59.jar",
    log_path: "./logs",
    port: 4444,
    cli_args: {
       "webdriver.chrome.driver": "./chrome/chromedriver"
    }
  },
  test_settings: {
    default: {
      // launch_url: "http://localhost:3000",
       launch_url: 'https://leavelab:iTjLdXfTphYyR58saxvwM6Y6@staging.leavelab.com/',
      selenium_port: 4444,
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions : {
          args: ['--no-sandbox','--disable-gpu','--incognito','--headless'],
          binary: "/usr/bin/google-chrome-stable",
          w3c: false
        }
      }
    }
  },

};


