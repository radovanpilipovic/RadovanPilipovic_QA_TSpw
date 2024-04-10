import { expect, test } from "@playwright/test";
import LoginPage from "../pages/loginPage";

test("Login without password", async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.baseURL();
  await loginPage.enterUsername(process.env.USERNAME_STANDARD_USER!);
  await loginPage.loginButtonClick();
  expect(await loginPage.errorMessageText()).toContain("Password is required");
});
