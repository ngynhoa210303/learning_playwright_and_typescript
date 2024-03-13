import { test, expect, Page, Locator } from "@playwright/test";
import {
  verificationCodeCustom,
  delay,
} from "../../turbo-test/sign-in/verificationSignIn.spec";
import { signInSuccess } from "../../turbo-test/sign-in/funcSignIn.spec";
test("handling table", async ({ page }) => {
  await signInSuccess(page);
  await verificationCodeCustom(page);
  await page.getByRole("button", { name: "SHOPPING" }).click();
  await delay(2000);
  //1) count row amd colums
  const tableLocator = page.locator("//table[@id='fleet-list']");
  const rows = await tableLocator.locator("tbody tr");

  //2) select btn for any product in the table
  const buttonInAnyRow = await page.locator(
    `//*[@id="fleet-list"]/tbody/tr[1]/td[3]/div/div/button[1]`
  );
  await buttonInAnyRow.first().click();

  //3) select multiple products by re-usable function
  await selectProduct(rows, page, "ARRSTAKIT201");
});
//CÁCH 2 GỌI PRODUCT
test.only("loopProduct", async ({ page }) => {
  await signInSuccess(page);
  await verificationCodeCustom(page);
  await page.getByRole("button", { name: "SHOPPING" }).click();
  await delay(2000);
  const tableLocator = page.locator("//table[@id='fleet-list']");
  const rows = await tableLocator.locator("tbody tr");
  expect(await rows.count()).toBe(10);
});
async function selectProduct(rows: Locator, page: Page, name: string) {
  const machedRow = rows.filter({
    has: page.locator("td"),
    hasText: name,
  });
  await machedRow
    .locator(
      "//button//span[@class='mat-button-wrapper']//div[contains(text(), 'Order parts only')]"
    )
    .click();
}
