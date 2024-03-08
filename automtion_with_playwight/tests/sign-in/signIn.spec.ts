import { expect, test } from "@playwright/test";
import { Page } from "@playwright/test";
export async function signIn(page: Page, email: string) {
  await page.goto("https://stage2.turbo-online.com/sign-in");
  await page.getByLabel("Email address *").click();
  await page.getByLabel("Email address *").fill(email);
  await page.getByRole("button", { name: "Login" }).click();
}
export async function fillVerificationCode(
  page: Page,
  codes: (number | undefined)[]
) {
  for (let i = 0; i < codes.length; i++) {
    if (codes[i] !== undefined) {
      await page
        .locator(`//form/div[${i + 1}]/label`)
        .fill((codes[i] as number).toString());
    }
  }
  await page.click('button:has-text("Verify code")');
}
