const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, until, By } from "selenium-webdriver";
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

import { BasePage } from "./reiBasePage";

const page = new BasePage(driver);

// Tests pathway and accuracy for search and purchase functionality
test("search", async () => {
    await page.navigate();
    await page.max();
    await page.doSearch("snowboards\n"); // Searches "snowborads in home page search bar"
    await page.click(page.board);  // Clicks T. Rice Orca - 2021-2021
    await page.click(page.size);  // Selects 150cm size
    await page.subscribe();  // Exits REI newsletter modal popup
    await page.click(page.addCart);
    await page.cartPopup();  // Begins purchase process
    await page.click(page.proceed);
    await page.click(page.guest);
    await page.click(page.noMember);
    await page.typeEmail("johndoemarydoe7@gmail.com")
    await page.phoneNumber("2065550000");
    await page.firstName("John");
    await page.lastName("Doe")
    await page.myAddress("222 Yale Ave N");
    await page.myCity("Seattle");
    await page.click(page.state);
    await page.myState();
    await page.myPostal("98109");
    await page.click(page.continueBtn);
    await page.sleep();
    await page.click(page.continueBtn);
    await page.sleep();
    // Checks that item ordered is accurate on final purchase page
    let myitem = await page.getText(page.itemDescribe);
    expect(myitem).toContain("T. Rice Orca Snowboard - 2021/2022");
    // Checks that the total cost including tax is accurate
    let myTotal = await page.getText(page.orderTotal);
    expect(myTotal).toContain("$738.62");
})

afterAll(async () => {
    await page.quit()
});