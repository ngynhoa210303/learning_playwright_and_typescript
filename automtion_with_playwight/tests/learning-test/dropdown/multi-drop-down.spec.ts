import { test, expect } from "@playwright/test";

test("Handle dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Select multiple options from multi select dropdown
  //await page.selectOption('#colors',['Blue', 'Red', 'Yellow'])

  //Assertions
  //1) check number of options in dropdown
  const optionsN = page.locator("#colors option");
  await expect(optionsN).toHaveCount(5);

  //2) check number of options in dropdown using JS array
  const options = await page.$$("#colors option");
  console.log("Number of options:", options.length);
  expect(options.length).toBe(5);

  //3) check presence of value in the dropdown
  const content = await page.locator("#colors").textContent();
  //await expect(content.includes('Black')).toBeTruthy();
  expect(content?.includes("Black")).toBeFalsy;
  await page.waitForTimeout(5000);
});
