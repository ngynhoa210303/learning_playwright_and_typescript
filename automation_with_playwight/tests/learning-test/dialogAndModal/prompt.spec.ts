import test, { expect } from "playwright/test";
test("Prompt Dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Enabling dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("John");
  });
  await page.click('//button[normalize-space()="Prompt"]');
  await expect(page.locator('//p[@id="demo"]')).toHaveText(
    "Hello John! How are you today?"
  );

  await page.waitForTimeout(5000);
});
