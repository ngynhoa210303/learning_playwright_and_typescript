import { test, expect } from "@playwright/test";
test("Select locator", async ({ page }) => {
  await page.goto(
    "https://stage2.turbo-online.com/sign-in?redirectURL=%2Fdashboard"
  );
  /*
    Locator
  //using any object property
  await page.getByLabel("Email address *").click();
  await page.getByLabel("Email address *").fill("anhdh.bhsoft+1@gmail.com");
  await page.getByRole("button", { name: "Login" }).click(); 
  //using css selector
  await page.locator("#ngx-otp-input-0").fill("8");
//using Xpath selector
 **1. 
  await page.locator('xpath=//input[@id="email"]')
    .fill("anhdh.bhsoft+1@gmail.com");

 **2. 
await page
    .locator(
      "//html/body/app-root/layout/empty-layout/div/div/auth-sign-in/div/div/div/form/mat-form-field/div/div[1]/div/input"
    )
    .fill("anhdh.bhsoft+1@gmail.com");

 **3. Contain từ khóa 
  await page.locator("//span[contain(text,'Email address')");

 **4. await page.locator("//following::div[1]/select/option[text() = 'Bình thường']");


//using Text
    1. await page.locator('text="Login"').click();
  */
  // await page.goto("https://getbootstrap.com/docs/5.3/forms/select/#default");
  //   await page.getByLabel("Default select example").selectOption("1");
  // await page.getByLabel('Large select example').selectOption('1');
  //   await page.locator("//button[contain(text,'Login')");
  await page.locator('button:has-text("Login")').click();
});
