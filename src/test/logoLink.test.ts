const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, until, By } from "selenium-webdriver";
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

import { BasePage } from "./reiBasePage";

const page = new BasePage(driver);

// test suite for REI Logo Home Page Link
describe("Home Page Links", () => {
    beforeAll(async () => {
        await page.navigate();
        await page.max();
    })

    // tests rei logo home page link from Outlet page
    test("REI Outlet Home Page Link", async () => {
        await page.click(page.outletButton);
        await page.click(page.reiHome)
    })

    // tests rei logo home page link from Adventures page
    test("REI Adventures Home Page Link", async () => {
        await page.click(page.reiAdventures);
        await page.click(page.reiHome)
    })

    // tests rei logo home page link from Used Gear page
    test("REI Used Gear Home Page Link", async () => {
        await page.click(page.usedGear);
        await page.click(page.reiHome)
    })

    afterAll(async () => {
        await page.quit()
    });

    jest.setTimeout(20000);
})


