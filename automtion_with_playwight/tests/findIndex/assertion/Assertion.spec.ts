// 1) Expect(page).toHaveURL() Trang có URL
// 2) Expect(page).toHaveTitle() Trang có tiêu đề
// 3) Phần tử Expect(locator).toBeVisible() hiển thị
// 4) Expect(locator).toBeEnabled() Kiểm soát được bật => không disable
// 5) Expect(locator).toBeChecked() Radio/Checkbox được chọn
// 6) Phần tử Expect(locator).toHaveAttribution() có thuộc tính
// 7) Expect(locator).toHaveText() Phần tử khớp với văn bản
// 8) Expect(locator).toContainText() Phần tử chứa văn bản
// 9) Expect(locator).toHaveValue(value) Đầu vào có giá trị
// 10) Expect(locator).toHaveCount() Danh sách các phần tử có độ dài cho trước
import { test, expect } from "@playwright/test";

test("Assert", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");
  // 1) Expect(page).toHaveURL()
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // 2) Expect(page).toHaveTitle()
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  // 3) Expect(locator).toBeVisible()
  await expect(page.getByAltText("nopCommerce demo store")).toBeVisible();

  // 4) Expect(locator).toBeEnabled() Kiểm soát được bật
  const search = page.locator("//input[@id='small-searchterms']");
  await expect(search).toBeEnabled();

  // 5) Expect(locator).toBeChecked() Radio/Checkbox được chọn
  const radio = page.locator("#gender-male");
  await radio.click();
  await expect(radio).toBeChecked();
  //=>checkbox giống hệt

  // 6) Phần tử Expect(locator).toHaveAttribution() có thuộc tính
  const locatorAttribute = page.locator("#register-button");
  await expect(locatorAttribute).toHaveAttribute("type", "submit"); //tên attribute,chức năng

  // 7) Expect(locator).toHaveText() Phần tử khớp với văn bản
  const haveText = page.locator("//strong[contains(text(),'Options')]");
  await expect(haveText).toHaveText("Options");

  // 8) Expect(locator).toContainText() Phần tử chứa văn bản
  const contain = page.locator("//body/div[6]/div[2]");
  await expect(contain).toContainText("Compute");

  // 9) Expect(locator).toHaveValue(value) Đầu vào có giá trị
  const haveValue = page.locator("#FirstName");
  await haveValue.fill("hihi");
  await expect(haveValue).toHaveValue("hihi");

  // 10) Expect(locator).toHaveCount() Danh sách các phần tử có độ dài cho trước
  const date = page.locator('select[name="DateOfBirthMonth"] option');
  await expect(date).toHaveCount(13);
});
