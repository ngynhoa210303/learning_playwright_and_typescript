import { test, expect, Page } from "@playwright/test";
import * as path from "path";
test("Image Upload Test", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://upanh.tv/");
  await importImg("7.jpg", page);
});
export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function importImg(img: string, page: Page) {
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.click("text='Start uploading'");
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(path.join(__dirname, "tests/upload/", img));
  // Construct the relative path to the image file
  const relativeFilePath = path.join(process.cwd(), "tests/upload/", img);

  // Use page.setInputFiles() to upload the file
  await page.setInputFiles('input[type="file"]', relativeFilePath);
  await delay(2000);
}
