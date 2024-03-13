import { test, expect } from "@playwright/test";

test("Mouse Double Click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const btnCopy = await page.locator('//button[normalize-space()="Copy Text"]');

  //double click
  //  Double click on button, the text from Field1 will be copied into Field2.
  await btnCopy.dblclick();

  const f2 = await page.locator("#field2");

  await expect(f2).toHaveValue("Hello World!");

  await page.waitForTimeout(5000);
});
