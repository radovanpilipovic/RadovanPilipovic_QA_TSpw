import { Locator, Page } from "@playwright/test";
const addBackPack = "#add-to-cart-sauce-labs-backpack";
const removeBackPack = "#remove-sauce-labs-backpack";

export default class ItemPage {
  constructor(public page: Page) {}

  async openShoppingCart() {
    await this.shoppingCartButton().click();
  }

  async removeSauceLabsBackpackFromCart() {
    await this.removeBackpackFromCartButton().click();
  }

  async clickSauceLabsBackpackImage() {
    await this.sauceLabsBackpackImage().click();
  }

  async addSauceBackPackItemToCart() {
    await this.addSauceBacpackToCartButton().click();
  }

  async addSauceLabsOnesieToCart() {
    await this.addSauceLabsOnesietoCartButton().click();
  }

  async sortBy(sortOption: string): Promise<void> {
    await this.sortSelector().selectOption(sortOption);
  }

  selectedSortOption(): Promise<string | null> {
    return this.page.locator('[class="active_option"]').textContent();
  }

  numberOfItemsInCart(): Promise<string | null> {
    return this.page.locator(".shopping_cart_badge").textContent();
  }

  private sortSelector(): Locator {
    return this.page.locator('[data-test="product_sort_container"]');
  }

  private addSauceBacpackToCartButton(): Locator {
    return this.page.locator('[id="add-to-cart-sauce-labs-backpack"]');
  }

  private addSauceLabsOnesietoCartButton(): Locator {
    return this.page.locator('[id="add-to-cart-sauce-labs-onesie"]');
  }

  private sauceLabsBackpackImage(): Locator {
    return this.page.locator('img[alt="Sauce Labs Backpack"]');
  }

  private removeBackpackFromCartButton(): Locator {
    return this.page.locator("#remove-sauce-labs-backpack");
  }

  private shoppingCartButton(): Locator {
    return this.page.locator(".shopping_cart_link");
  }
}
