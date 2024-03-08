// // import { test, expect } from "@playwright/test";

// // test("test", async ({ page }) => {
// //   await page.goto("https://upanh.org/?lang=vi");
// //   await page.getByRole("link", { name: " Upload" }).click();
// //   await page.getByText("tải lên từ máy tính").first().click();
// //   // await page.locator("#index").setInputFiles("1.jpg");
// //   // Gửi request tải lên tệp tin từ máy tính
// //   const filePath = "C:/Users/hoant/OneDrive/Pictures/Saved Pictures/1.jpg"; // Đường dẫn đến tệp tin bạn muốn tải lên
// //   const inputUploadElement = await page.locator('input[type="file"]');
// //   await inputUploadElement.setInputFiles(filePath);

// //   // Kiểm tra xem tệp tin đã được chọn thành công hay không
// //   const selectedFiles = await inputUploadElement.inputValue();
// //   expect(selectedFiles).toContain("file.jpg");
// // });
// // import { test, expect } from "@playwright/test";

// // test("Image Upload Test", async ({ page }) => {
// //   // Navigate to the page
// //   await page.goto("https://uphinh.vn/");

// //   // Click on the upload button or link
// //   await page.click("text='Start uploading'");

// //   // Select the file to upload
// //   //   const filePath = ; // Path to the image file
// //   const inputUploadElement = page.locator(
// //     'input[type="file"]:not([capture="camera"])'
// //   );
// //   await inputUploadElement.setInputFiles([
// //     "E:/automtion_with_playwight/tests/upload/7.jpg",
// //   ]);
// //   await page.mouse.click(50, 50);
// //   await page.pause();
// // });
import { test, expect } from "@playwright/test";

test("Image Upload Test", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://ant.design/components/upload");

  // Click on the upload button or link
  await page.click("text='Click to Upload'");

  // Select the file to upload
  const filePath = "E:/automtion_with_playwight/tests/upload/7.jpg"; // Path to the image file

  // Use page.setInputFiles() to upload the file
  await page.setInputFiles('input[type="file"]', filePath);
  await page.pause();
});
