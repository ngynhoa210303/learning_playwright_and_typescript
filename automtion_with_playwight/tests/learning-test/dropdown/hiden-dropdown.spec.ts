//f12 không lấy đc bên trong
import { test } from "@playwright/test";
test("hidden-dropdown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.locator("[name='username']").fill("Admin");
  await page.locator("[name='password']").fill("admin123");
  await page.locator("[type='submit']").click();
  //click PM trên menu
  await page.locator("//span[normalize-space()='PIM']").click();
  //Xpath not All Xpath
  await page.locator(
    '*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div'
  );

  //   //waiting for options
  //   await page.waitForTimeout(3000);

  const options = await page.$$("//div[@role='listbox']//span");

  for (let option of options) {
    const jobTitle = await option.textContent();
    //console.log(jobTitle);
    if (jobTitle?.includes("QA Engineer")) {
      await option.click();
      break;
    }
  }

  //   await page.waitForTimeout(5000);
});
