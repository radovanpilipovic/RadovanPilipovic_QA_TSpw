import { expect, test } from "@playwright/test";
import ItemPage from "../pages/itemPage";
import LoginPage from "../pages/loginPage";
import { sortByPrice } from "../utils.ts/sorting";
const sortOption = {
  NameAscending: "az",
  NameDescending: "za",
  PriceAscending: "lohi",
  PriceDescending: "hilo",
};

test.beforeEach(async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.loginStandardUser(
    process.env.USERNAME_STANDARD_USER!,
    process.env.PASSWORD_STANDARD_USER!
  );
});

test("test1 - sort items by price from low to high", async function ({ page }) {
  const itemPage = new ItemPage(page);
  await itemPage.sortBy(sortOption.PriceAscending);
  expect(await itemPage.selectedSortOption()).toBe("Price (low to high)");

  const priceArray = await page
    .locator(".inventory_item_price")
    .allTextContents();
  const sortedPriceArray = priceArray.sort(sortByPrice);
  expect(priceArray).toEqual(sortedPriceArray);
});

test("test2 verify number of items in the cart", async function ({ page }) {
  const itemPage = new ItemPage(page);
  await itemPage.addSauceBackPackItemToCart();
  await itemPage.addSauceLabsOnesieToCart();
  await itemPage.clickSauceLabsBackpackImage();
  await itemPage.removeSauceLabsBackpackFromCart();
  const numberOfItems = Number(await itemPage.numberOfItemsInCart());
  expect(numberOfItems).toEqual(1);
});
