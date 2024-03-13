import test, { expect } from "playwright/test";
test("Confirmation Dialod-Alert with OK and cancel", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Enabling dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept(); // close by using OK button
    //await dialog.dismiss(); // close by using cancel
  });
  await page.click('//button[normalize-space()="Confirm Box"]');
  await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed OK!");

  await page.waitForTimeout(5000);
});
