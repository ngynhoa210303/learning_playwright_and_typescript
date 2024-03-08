// mainTest.ts
import { Page, expect, test } from "@playwright/test";
import { signIn } from "./signIn.spec";

const testSuccess = "anhdh.bhsoft+1@gmail.com";
const testNotSuccess = "hoadep@gmail.com";
const testNotExsist = "hih";

//test
// test("FUNC login", async ({ page }) => {
//   // Thực hiện đăng nhập
//   await signInSuccess(page);
//   // Điền mã xác minh
// });

// test("FUNC not exist", async ({ page }) => {
//   await signInNotExist(page);
// });
// test("FUNC not success", async ({ page }) => {
//   // Thực hiện đăng nhập
//   await signInNotSuccess(page);
// });

/** 1. TH Đăng nhập thành công */
export async function signInSuccess(page: Page) {
  await signIn(page, testSuccess);
  const pageContainsEmailVerification = await page.textContent(
    "body >> text=Email Verification"
  );
  expect(pageContainsEmailVerification).toBeTruthy();
}

/** 2. TH Đăng nhập với tài khoản không tồn tại */
async function signInNotExist(page: Page) {
  await signIn(page, testNotExsist);
  const isErrorMessageDisplayed = await page.isVisible("//div/mat-error");
  expect(isErrorMessageDisplayed).toBeTruthy();
}
/** 2. TH Đăng nhập với tài khoản tồn tại  nhưng chưa đăng ký */
async function signInNotSuccess(page: Page) {
  await signIn(page, testNotSuccess);
  const isErrorMessageDisplayed = page.locator('text="User not found"');
  expect(isErrorMessageDisplayed).toBeTruthy();
}
