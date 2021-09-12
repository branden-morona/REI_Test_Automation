import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
} from "selenium-webdriver";

export class BasePage {
    driver: WebDriver;
    url: string = "https://www.rei.com/";

    // Selectors 

    // Inputs for purchasing as a guest
    emailInput: By = By.css("#email")
    passwordInput: By = By.css('input[name="password"]')
    phoneInput: By = By.css("#phone")
    name1: By = By.css("#first_name")
    name2: By = By.css("#last_name")
    addressInput: By = By.css("#address_line_one")
    city: By = By.css("#city")
    state: By = By.css("#state_province_id")
    stateAd: By = By.xpath("//option[contains(@value, 'WA')]")
    postal: By = By.css("#postal_code")
    searchBar: By = By.css("#inputGroup")
    // Selector specific to T. Rice Orca Snowboard - 2021/2022
    board: By = By.xpath("//img[contains(@src, '/media/1e62a9ed-3db0-493e-a26b-61ca46c9b068')]")
    // 150cm board size button
    size: By = By.xpath("//button[contains(@data-skus-size, '1962480004')]")
    addCart: By = By.css("#add-to-cart-button")
    checkout: By = By.xpath("//button[contains(@data-ui, 'btn-proceed-to-checkout')]")
    // X button on modal window for signing up for REI emails
    closeAd: By = By.css(".close-text")
    // Proceed to Checkout button
    proceed: By = By.xpath("//a[contains(text(), 'Proceed to checkout')]")
    // Continue to purchase as a guest button
    guest: By = By.xpath("//a[contains(@data-ui, 'continue-as-guest')]")
    // Do not want a membership button
    noMember: By = By.xpath("//button[contains(@data-ui, 'continue-without-link')]")
    // Continue to Checkout button
    continueBtn: By = By.xpath("//button[contains(@data-ui, 'continue')]")
    // Selector for order total cost
    orderTotal: By = By.xpath("//dd[contains(@class, 'total-header')]")
    // Selector for item description in cart
    itemDescribe: By = By.css(".item__description")
    // Store locator button
    store: By = By.xpath("//a[contains(@data-ui, 'site-header-action-local')]")
    // Visit directory of al stores button
    allStores: By = By.xpath("//a[contains(@data-ui, 'all-stores-button')]")
    // Washington dropdown menu in store locator
    washington: By = By.css("#state-accordion-WA-label")
    // Seattle Flagship location link
    waFlag: By = By.xpath("//a[contains(text(), 'Seattle Flagship')]")
    // Seattle Flagship address selector
    flagAdd: By = By.xpath("//p[contains(@data-ui, 'main-address')]")
    outletButton: By = By.xpath("//a[contains(@data-analytics-id, 'universal_nav:rei garage')]")
    usedGear: By = By.xpath("//a[contains(@data-analytics-id, 'universal_nav:used gear')]")
    reiAdventures: By = By.xpath("//a[contains(@data-analytics-id, 'universal_nav:rei adventures')]")
    reiHome: By = By.xpath("//img[contains(@src, '//satchel.rei.com/media/img/header/rei-co-op-logo-black.svg')]")




    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    // Opens browser to designated URL
    async navigate() {
        await this.driver.get(this.url);
    }

    // Maximizes page
    async max() {
        await this.driver.manage().window().maximize()
    }

    // Closes browser
    async quit() {
        await this.driver.quit()
    }

    async sleep() {
        await this.driver.sleep(5000);
    }

    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }

    // Types input into located element
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    }

    async getText(elementBy: any) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).getText();
    }

    // Locates search bar and types input
    async doSearch(text: string) {
        return this.sendKeys(this.searchBar, `${text}`);
    }

    // Closes ad to sign up for REI emails
    async subscribe() {
        await this.driver.wait(until.elementLocated(this.closeAd));
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.closeAd)));
        await this.driver.findElement(this.closeAd).click();
    }

    // Waits until Seattle location is visible in menu and clicks
    async seaStore() {
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.waFlag)));
        await this.driver.findElement(this.waFlag).click();
    }

    // Waits until modal window for checkout is available and clicks
    async cartPopup() {
        await this.driver.wait(until.elementLocated(this.checkout));
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.checkout)));
        await this.driver.findElement(this.checkout).click();
    }

    async typeEmail(text: string) {
        return this.sendKeys(this.emailInput, `${text}`);
    }

    async phoneNumber(text: string) {
        return this.sendKeys(this.phoneInput, `${text}`);
    }

    async firstName(text: string) {
        return this.sendKeys(this.name1, `${text}`);
    }

    async lastName(text: string) {
        return this.sendKeys(this.name2, `${text}`);
    }

    async myAddress(text: string) {
        return this.sendKeys(this.addressInput, `${text}`);
    }

    async myCity(text: string) {
        return this.sendKeys(this.city, `${text}`);
    }

    async myPostal(text: string) {
        return this.sendKeys(this.postal, `${text}`);
    }

    // Waits until shipping/billing state drop down box is clicked, then clicks Washington
    async myState() {
        await this.driver.wait(until.elementLocated(this.stateAd));
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.stateAd)));
        await this.driver.findElement(this.stateAd).click();
    }
}