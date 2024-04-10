import { Locator, Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async loginStandardUser(username: string, password: string) {
    await this.baseURL();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.loginButtonClick();
  }

  async baseURL() {
    await this.page.goto(`${process.env.BASE_URL}`);
  }

  async enterUsername(username: string): Promise<void> {
    await this.userNameField().fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordField().fill(password);
  }

  async loginButtonClick() {
    await this.page.locator("#login-button").click();
  }

  private passwordField(): Locator {
    return this.page.locator("#password");
  }

  private userNameField(): Locator {
    return this.page.locator("#user-name");
  }

  errorMessageText(): Promise<string | null> {
    return this.page.locator('[data-test="error"]').textContent();
  }
}
