import { Page, test } from "@playwright/test";
import {
  verificationCodeCustom,
  delay,
} from "../sign-in/verificationSignIn.spec";
import { signInSuccess } from "../sign-in/funcSignIn.spec";
test("add to card", async ({ page }) => {
  await signInSuccess(page);
  await verificationCodeCustom(page);
  // await stepAddToCard(page);
});
export async function stepAddToCard(page: Page) {
  //choose "Order full kit"
  await page.getByRole("button", { name: "SHOPPING" }).click();
  await delay(2000);
  await page
    .getByRole("row", {
      name: "View Installation Guide POMERLKIT001 PICK UP_GENERIQUE Order parts only Order",
    })

    .getByRole("button")
    .nth(1)
    .click();
  await delay(2000);
  await page
    .getByRole("row", { name: 'POMERL0003 80" X 64" Per unit' })
    .getByRole("button")
    .click();
  await page.getByRole("button", { name: "Add to basket" }).click();

  // choose
}
