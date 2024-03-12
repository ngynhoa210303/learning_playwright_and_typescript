import { test, chromium } from "@playwright/test";
import { signInSuccess } from "../sign-in/funcSignIn.spec";
import { verificationCodeCustom } from "../sign-in/verificationSignIn.spec";
/*
**beforeAll
executed before all tests in the file
when used inside describe, runs before all tests in the group
If multiple beforeAll is used, they will run in the order of their registration

**beforeEach
executed before each test in the file
when used inside describe, runs before each test in the group
If multiple beforeEach is used, they will run in the order of their registration

**afterAll
executes after all tests in the file
when used inside describe, runs after all tests in the group
If multiple afterAll is used, they will run in the order of their registration

**afterEach
executes after each test in the file
when used inside describe, runs after each test in the group
If multiple afterEach is used, they will run in the order of their registration

=> Phân biệt tại: https://upanh.tv/image/y1tOES
******** Xem tại: https://www.youtube.com/watch?v=T__TlfP-ln0

test("Hook and Group", async ({ page }) => {
  await signInSuccess(page);
  await page.pause();
});
//Chương trình chỉ chạy mỗi hàm này
test.only("Hook and Group Ver2", async ({ page }) => {
  await signInSuccess(page);
  await page.pause();
});
*/
test.describe("Group 1", () => {
  test.beforeEach(async ({ page }) => {
    await signInSuccess(page);
  });
  test("Hook and Group", async ({ page }) => {
    // await signInSuccess(page);
    await verificationCodeCustom(page);
  });
  test.afterAll("Close", async ({ page }) => {
    //   await verificationCodeCustom(page);
    await page.close();
  });
});
