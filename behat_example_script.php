use Behat\Behat\Context\ClosuredContextInterface,
    Behat\Behat\Context\TranslatedContextInterface,
    Behat\Behat\Context\BehatContext,
    Behat\Behat\Exception\PendingException;
use Behat\Gherkin\Node\PyStringNode,
    Behat\Gherkin\Node\TableNode;
use Behat\MinkExtension\Context\MinkContext;

// php Composer.phar facebook/webdriver

use Facebook\WebDriver\Remote\RemoteWebdriver;
use Behat\MinkExtension\Selenium2driver;

/**
 * Features context.
 */
class FeatureContext extends MinkContext
{
    public function __construct()
    {
      $username = "username@company.com";
      $authkey = "yourauthkey";
      $host = "http://" . $username . ":" . $authkey . "@hub.crossbrowsertesting.com:80/wd/hub";
      try {

        // Pass in our API Names within a desiredCapabilities array.
        $desiredCapabilities = array("name"=> "Selenium Test Example",
                                     "build"=> "1.0",
                                     "browser_api_name"=> "FF46",
                                     "os_api_name"=> "Win10",
                                     "record_video"=> "True");
        $driver = RemoteWebDriver::create($host, $desiredCapabilities);
      } catch (WebDriverException $ex) {
        echo "Error instantiating RemoteWebDriver:" . $ex->getMessage();
      }


      /**
      * @Then /^I get title as "([^"]*)"$/
      */

      try {
        $driver->get("http://www.google.com");

        if ($driver->getTitle() == "Google") {
          echo "Title is correct.\n";                    // assert title
        }

      } catch (PendingException $ex) {
        echo "Problem at get(URL): " . $ex->getMessage();
      } finally {
        $driver->quit();
      }
    }
}
