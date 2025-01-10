import { test, expect } from "@playwright/test";

test("Count", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");

  // 1) total number of rows & columns
  const columns = await table.locator("thead tr th");
  console.log("Number of columns:", await columns.count()); //4
  expect(await columns.count()).toBe(4);

  const rows = await table.locator("tbody tr");
  console.log("Number of rows:", await rows.count()); //5
  expect(await rows.count()).toBe(5);
});
