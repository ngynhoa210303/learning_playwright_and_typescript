import { test, expect, Page, Locator } from "@playwright/test";
import {
  verificationCodeCustom,
  delay,
} from "../../turbo-test/sign-in/verificationSignIn.spec";
import { signInSuccess } from "../../turbo-test/sign-in/funcSignIn.spec";
test("Lặp lấy product", async ({ page }) => {
  await signInSuccess(page);
  await verificationCodeCustom(page);
  await page.getByRole("button", { name: "SHOPPING" }).click();
  await delay(2000);
  const tableLocator = page.locator("//table[@id='fleet-list']");
  const rows = await tableLocator.locator("tbody tr");
  await loopProduct(rows);
});
async function loopProduct(rows: Locator) {
  for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const tds = row.locator("td");

    for (let j = 0; j < (await tds.count()) - 1; j++) {
      console.log(await tds.nth(j).textContent());
    }
  }
}
