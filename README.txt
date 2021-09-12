# REI_Test_Automation

## Summary

*Code may be outdated due to website changes. See mp4 files in test videos folder to view working code.

To test the functionality of REI.com, I created two automated tests. These tests have their own files in addition to a base page which holds their selectors and methods. These tests use Jest as a test
runner, and Selenium Webdriver to hook into the browser.

## Setup

How to set Up the tests: 

1. clone it.
2. `npm i` to install all the dependencies  
3. `npm i -d selenium-webdriver` to install selenium webdriver 
4. `npm install chromedriver --chromedriver_version=LATEST` to install latest chrome driver as older version would fail the tests

## Running Tests

To conduct the test, use `npm jest [test name]` to initialize and run the selected test.  

## What Do We Test

- buy.test.ts tests the process of searching an item, adding it to cart, and going through the buying process. 
- location.test.ts tests locating a store and finding its address. 
- reiBasePage.ts is the base page that holds the test selectors and methods.

## Data Files
Files used: 
REI Website: https://www.rei.com/
