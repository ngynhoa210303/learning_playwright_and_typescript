import { Locator, Page, expect, test } from "@playwright/test";
import {
  verificationCodeCustom,
  delay,
} from "../sign-in/verificationSignIn.spec";
import { signInSuccess } from "../sign-in/funcSignIn.spec";

// test.only("loopProduct", async ({ page }) => {
//   await signInSuccess(page);
//   await verificationCodeCustom(page);

// });
let page: any;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  // Thực hiện đăng nhập thành công và xác minh mã tùy chỉnh
  await signInSuccess(page);
  await verificationCodeCustom(page);
});

test("loopProduct", async () => {
  await page.getByRole("button", { name: "SHOPPING" }).click();
  await delay(2000);
  const tableLocator = page.locator("//table[@id='fleet-list']");
  const rows = tableLocator.locator("tbody tr");
  await selectProduct(rows);
  await delay(2000);
  await selectTab();
});
async function selectProduct(rows: Locator) {
  const rowCount = await rows.count(); // Đếm số lượng phần tử trong mảng
  if (rowCount > 0) {
    const firstRow = rows.first(); // Lấy phần tử đầu tiên
    await firstRow
      .locator(
        "//button//span[@class='mat-button-wrapper']//div[contains(text(), 'Order parts only')]"
      )
      .click();
  } else {
    console.log("Không có bất kỳ hàng nào để chọn.");
  }
}

//chạy vòng lặp chọn 1 trong 4 phần tử

//Tìm vị trí của 4 nút
async function selectTab() {
  const tabLocator = page.locator("[role='tablist']");
  const tabItems = tabLocator.locator("[role='tab']");
  const tableTabItems = page.locator("//table[@id='part-list']");
  const rowTab = tableTabItems.locator("tbody tr");
  const table = await tableTabItems.count();
  for (let i = 0; i < (await tabItems.count()); i++) {
    const tabItem = tabItems.nth(i);
    await tabItem.click();
    console.log(table);

    if (table !== null && table !== undefined && table > 0) {
      await selectProductInProduct(rowTab);
      try {
        // Sử dụng await để đợi cho phần tử xuất hiện
        const ok = await page.isVisible('//span[contains(text(),"Options")]', {
          timeout: 2000,
        });
        if (ok) {
          await page.getByRole("button", { name: "Ok" }).click();
        }
        await timUnit(page);
      } catch (error) {
        console.log(
          "Không tìm thấy nút Ok hoặc đã hết thời gian chờ. Tiếp tục chạy..."
        );
      }
    }
    if (table < 0) {
      break;
    }
  }
}
async function selectProductInProduct(rows: Locator) {
  const rowCount = await rows.count(); // Đếm số lượng phần tử trong mảng
  if (rowCount > 0) {
    const firstRow = rows.first(); // Lấy phần tử đầu tiên
    await firstRow
      .locator("//button//span//div[contains(text(), 'Select')]")
      .click();
  } else {
    console.log("Không có bất kỳ hàng nào để chọn.");
  }
}
async function timUnit(page: Page) {
  const th2 = await page.isVisible('//span[contains(text(),"Quantity")]', {
    timeout: 2000,
  });
  const thInUnit = await page.isVisible(
    '//span[contains(text(),"Generate unit number")]',
    {
      timeout: 2000,
    }
  );
  if (th2 || thInUnit) {
    await page.getByRole("button", { name: "Ok" }).click();
    await page
      .locator("//li//mat-form-field//div//div//div//input")
      .fill("345");
    await page.getByRole("button", { name: "Add to basket" }).click();
  }
}
