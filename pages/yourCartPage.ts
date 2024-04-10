import { Locator, Page } from "@playwright/test";

export default class YourCartPage {
  constructor(public page: Page) {}

  async goToCheckout() {
    await this.checkoutButton().click();
  }

  private checkoutButton(): Locator {
    return this.page.locator("#checkout");
  }
}
