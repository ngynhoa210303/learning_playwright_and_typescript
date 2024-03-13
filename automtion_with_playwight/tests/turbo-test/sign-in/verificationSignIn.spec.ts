import { Page, expect, test } from "@playwright/test";
import { fillVerificationCode } from "./signIn.spec";
const codeTrue = [8, 8, 8, 8, 8, 8];
const codeFalse = [8, 8, 8, 8, 8, 7];
/* Test*/
// test("FUNC veri", async ({ page }) => {
//   await signInSuccess(page);
//   // Điền mã xác minh
//   await verificationCodeCustom(page);
// });
// test("FUNC notveri", async ({ page }) => {
//   await signInSuccess(page);
//   // Điền mã xác minh
//   await verificationCodeCustomFail(page);
// });
/* TH1: Xác thực thành công */
export async function verificationCodeCustom(page: Page) {
  await fillVerificationCode(page, codeTrue);
  const pageContainsEmailVerification = await page.textContent(
    "body >> text=Dashboard"
  );
  expect(pageContainsEmailVerification).toBeTruthy();
}
/* TH2: Xác thực thất bại */
export async function verificationCodeCustomFail(page: Page) {
  await fillVerificationCode(page, codeFalse);
  await delay(3000);
  const isErrorMessageDisplayed = page.locator('text="Bad code. Please retry"');
  expect(isErrorMessageDisplayed).toBeTruthy();
}
export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
