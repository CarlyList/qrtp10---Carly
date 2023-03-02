import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class GooglePage extends BasePage {
    searchBar: By = By.name('q')
    results: By = By.id("rso")
    constructor() {
        super({url: "https://www.google.com"})
    }
}