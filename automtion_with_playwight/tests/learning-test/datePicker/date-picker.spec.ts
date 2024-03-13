import { DatePicker } from "./datePicker";

// page.$(selector): Phương thức này trả về một phần tử đầu tiên trên trang web phù hợp với CSS selector hoặc XPath selector đã cung cấp.
// Nếu không tìm thấy phần tử nào, phương thức này trả về null.

// page.$$(selector): Phương thức này trả về một mảng các phần tử trên trang web phù hợp với CSS selector hoặc XPath selector đã cung cấp.
import { test, expect } from "@playwright/test";

test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  // await page.fill('#datepicker','03/15/2024')

  //date picker
  const year = "2022";
  const month = "March";
  const date = "25";

  const getDate = new DatePicker(year, month, date, page);
  await getDate.action();
  //Danh sách ngày =
  //nhiều ptu ở dạng mảng
  const dates = await page.$$("//a[@class='ui-state-default']");

  //date selection using loop
  for (const dt of dates) {
    if ((await dt.textContent()) == date) {
      await dt.click();
      break;
    }
  }
  //date selection - wihout loop
  await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

  await page.waitForTimeout(5000);
});
