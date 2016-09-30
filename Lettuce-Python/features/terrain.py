
from lettuce import *
from selenium import webdriver
import lettuce_webdriver.webdriver


username = 'chase@crossbrowsertesting.com'
authkey = 'u81305495037f796'


@before.all
def setUp():
    caps = {}
    caps['os_api_name'] = 'Win10'
    caps['browser_api_name'] = 'Chrome49'
    world.browser = webdriver.Remote(
        desired_capabilities = caps,
        command_executor="http://%s:%s@hub.crossbrowsertesting.com:80/wd/hub"%(username, authkey)
    )

def tearDown():
    world.browser.quit()
