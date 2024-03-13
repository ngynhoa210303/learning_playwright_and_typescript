import test, { expect } from "playwright/test";

// Tìm tại: https://playwright.dev/docs/dialogs
test("Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //Enabling Dilaog window handler
  //ấn nút Alert

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    //chứa message
    expect(dialog.message()).toContain("I am an alert box!");
    //ok
    await dialog.accept();
  });
  await page.click('//button[normalize-space()="Alert"]');
  await page.waitForTimeout(5000);
});
