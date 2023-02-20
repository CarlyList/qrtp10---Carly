import { Builder, Capabilities,  By, until } from "selenium-webdriver";
const chromedriver = require("chromedriver")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("open employee manager", async() =>) {
    await driver.get("insert site here")
    await driver.sleep()
    await driver.quit()
}