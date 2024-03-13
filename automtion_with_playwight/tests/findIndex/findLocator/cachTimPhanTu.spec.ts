/*
  CÁCH LẤY LOCATOR
*/

import { Page, expect, test } from "@playwright/test";
export async function signIn(page: Page, email: string) {
  await page.goto("https://stage2.turbo-online.com/sign-in");
  //C1.
  //   await page.getByLabel("Email address *").click();

  //C2.
  //   await page.locator("#email").click();

  //C3.
  await page.fill("#email", email);
  //   await page.getByLabel("Email address *").fill(email);
  //   await page.getByRole("button", { name: "Login" }).click();

  // **Kiem tra tồn tại link duoi Logout
  await expect(
    page.locator("//a[contains(text(),'Turbo Images.')]")
  ).toBeVisible();
}
test("test", async ({ page }) => {
  await signIn(page, "anhdh.bhsoft+1@gmail.com");
});
