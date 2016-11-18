from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
import requests

username = 'you@yourdomain.com'
authkey = 'yourauthkey'

def before_feature(context, feature):
    caps = {}
    caps['name'] = 'Behave Example'
    caps['build'] = '1.0'
    caps['browser_api_name'] = "Chrome53"
    caps['os_api_name'] = "Win10"
    caps['screen_resolution'] = '1024x768'
    caps['record_video'] = 'true'
    caps['record_network'] = 'true'


    context.api_session = requests.Session()
    context.api_session.auth = (username, authkey)

    context.driver = webdriver.Remote(
            desired_capabilities=caps,
            command_executor="http://%s:%s@hub.crossbrowsertesting.com:80/wd/hub"%(username, authkey)
    )

def after_feature(context, feature):
    context.driver.quit() 
    
