import { expect, test } from "@playwright/test";
test("FUNC upon unsuccessful login", async ({ page }) => {
  await page.goto("https://stage2.turbo-online.com/sign-in");
  // Attempt unsuccessful login
  await page.getByLabel("Email address *").click();
  await page
    .locator("div")
    .filter({ hasText: "Sign in Select language:" })
    .nth(3)
    .click();

  // Wait for the error message to be displayed
  await page.waitForSelector("//div/mat-error");

  // Check if the page displays the "Email address is required" error message
  const isErrorMessageDisplayed = await page.isVisible("//div/mat-error");
  expect(isErrorMessageDisplayed).toBeTruthy();
});
