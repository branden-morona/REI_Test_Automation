const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, until, By } from "selenium-webdriver";
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

import { BasePage } from "./reiBasePage";

const page = new BasePage(driver);

// Tests store locator feature and finds Seattle store address
test("store locator", async () => {
    await page.navigate();
    await page.max();
    await page.click(page.store);
    await page.click(page.allStores);
    await page.click(page.washington);
    await page.seaStore();
    let address = await page.getText(page.flagAdd);
    // Checks that Seattle Flagship page displays accurate address
    expect(address).toContain("222 Yale Ave N");
    await page.sleep();
})

afterAll(async () => {
    await page.quit()
});