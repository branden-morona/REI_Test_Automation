# REI_Test_Automation

## Summary

*Code may be outdated due to website changes. See mp4 files in test videos folder to view working code.

To test the functionality of REI.com, I created three automated tests. These tests have their own files in addition to a base page which holds their selectors and methods. These tests use Jest as a test runner, and Selenium Webdriver to hook into the browser.

The first test checks the functionality of the website's store locator.  It starts on the REI home page, then finds the store locator and clicks it way to the Seattle Flagship location page.  There is asserts that the address is the confirmed location 222 Yale Ave N in Seattle, Washington and passes.

The second test performs the action of purchasing an item and calculating the cost.  Beginning at the REI home page, Webdriver searches "snowboards" and selects the Lib Tech T. Rice Orca 2021/2022 Snowboard.  It then selects the 150cm size and adds it to the cart.  Then it clicks through pages while filling in required information such as shipping and billing addresses and ends at the final cart page before purchasing.  Here the subtotal cost of the item is asserted to be $738.62.  This price is determined accurate and the test passes.

The third and final test checks the functionality of the REI logo when used as a link to return the user to the REI home page.  It begins on the REI home page.  When the REI Outlet button is clicked, the user is taken to the outlet page.  Then the REI logo is clicked and the user returns to the home page.  The same is performed for the REI Adventures page and the same passing result occurs.  However, when Webdriver attempts to return home with the REI logo from the Used Gear page, no transition occurs.  This is a website defect found through automation of REI.com.  

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
