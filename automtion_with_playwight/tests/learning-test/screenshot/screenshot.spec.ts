//3 loại Screenshots
/**
 * 1. Full page screenshots
 * 2. Capture into buffer
 * 3. Element screenshot
 */

//1.
import { test } from "@playwright/test";

test("page screenshot", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "HomePage.png",
  });
});

test("Full page screenshot", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "FullPage.png",
    fullPage: true,
  });
});

test.only("Element screenshot", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  await page
    .locator('//*[@id="content"]/div[2]/div[1]/form/div')
    .screenshot({ path: "tests/screenshots/" + Date.now() + "Macbook.png" });
});
