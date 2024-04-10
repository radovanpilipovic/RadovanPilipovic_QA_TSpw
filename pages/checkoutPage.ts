import { Locator, Page } from "@playwright/test";

export default class CheckoutPage {
  constructor(public page: Page) {}

  itemTotal(): Promise<string | null> {
    return this.page.locator(".summary_subtotal_label").textContent();
  }

  tax(): Promise<string | null> {
    return this.page.locator(".summary_tax_label").textContent();
  }

  total(): Promise<string | null> {
    return this.page.locator(".summary_total_label").textContent();
  }

  get title() {
    return this.page.locator(".title");
  }

  async enterFirtsName(firstName: string) {
    await this.firstNameInputField().fill(firstName);
  }

  async enterLastName(lastName: string) {
    await this.lastNameInputField().fill(lastName);
  }

  async enterZipCode(zipCode: string) {
    await this.zipCodeInputField().fill(zipCode);
  }

  async fillFormStandardUser() {
    await this.enterFirtsName(process.env.FIRST_NAME!);
    await this.enterLastName(process.env.LAST_NAME!);
    await this.enterZipCode(process.env.ZIP_CODE!);
  }

  async continueButtonClick() {
    await this.page.locator("#continue").click();
  }

  async finishButtonClick() {
    await this.page.locator("#finish").click();
  }

  private firstNameInputField(): Locator {
    return this.page.locator("#first-name");
  }

  private lastNameInputField(): Locator {
    return this.page.locator("#last-name");
  }

  private zipCodeInputField(): Locator {
    return this.page.locator("#postal-code");
  }
}
