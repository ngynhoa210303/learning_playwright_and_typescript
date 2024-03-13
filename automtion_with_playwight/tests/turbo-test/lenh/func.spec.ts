import { expect, test } from "@playwright/test";
// Tài liệu ở: https://playwright.dev/docs/api/class-genericassertions#generic-assertions-to-be-truthy
test("FUNC upon successful login", async ({ page }) => {
  await page.goto("https://stage2.turbo-online.com/sign-in");
  // Sign in success
  // c1.const emailInput = await page.$("//input[@id='email']");
  // c2.const emailInput = await page.$("email");

  // if (emailInput) {
  //   await emailInput.click();
  // } else {
  //   console.error("Không tìm thấy input với id 'email'");
  // }
  // c3.await page.$$("input");
  await page.getByLabel("Email address *").fill("anhdh.bhsoft+1@gmail.com");
  await page.getByRole("button", { name: "Login" }).click();
  const pageContainsEmailVerification = await page.textContent(
    "body >> text=Email Verification"
  );
  expect(pageContainsEmailVerification).toBeTruthy();
});
