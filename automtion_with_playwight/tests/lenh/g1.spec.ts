import { expect, test } from "@playwright/test";
test("GUI in Sign in", async ({ page }) => {
  await page.goto("https://stage2.turbo-online.com/sign-in");
  //   Get logo the page
  page.locator("//div/img");
  //Check for image existence
  const imgElement = await page.$("//div/img");
  expect(imgElement).not.toBeNull();
  // check for tittle existence
  await expect(page).toHaveTitle(/Turbo Online/);
  //   Check "Sign in" font / text color
});
