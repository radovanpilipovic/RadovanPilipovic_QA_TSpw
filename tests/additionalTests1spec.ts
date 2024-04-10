import { expect, test } from "@playwright/test";
import CheckoutPage from "../pages/checkoutPage";
import ItemPage from "../pages/itemPage";
import LoginPage from "../pages/loginPage";
import YourCartPage from "../pages/yourCartPage";

test.beforeEach(async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.loginStandardUser(
    process.env.USERNAME_STANDARD_USER!,
    process.env.PASSWORD_STANDARD_USER!
  );
});

test("Successful shoping proces", async ({ page }) => {
  const itemPage = new ItemPage(page);
  const yourCartPage = new YourCartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await itemPage.addSauceBackPackItemToCart();
  await itemPage.openShoppingCart();
  await yourCartPage.goToCheckout();
  await checkoutPage.fillFormStandardUser();
  await checkoutPage.continueButtonClick();

  expect(await checkoutPage.itemTotal()).toEqual("Item total: $29.99");
  expect(await checkoutPage.tax()).toEqual("Tax: $2.40");
  expect(await checkoutPage.total()).toEqual("Total: $32.39");

  await checkoutPage.finishButtonClick();
  await expect(checkoutPage.title).toHaveText("Checkout: Complete!");
});
