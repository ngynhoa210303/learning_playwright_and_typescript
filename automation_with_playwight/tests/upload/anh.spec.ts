import { test, expect, Page } from "@playwright/test";
import * as path from "path";

test("Image Upload Test", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://upanh.tv/");
  // await importImg("7.jpg", page);
  const imageFiles = ["6.jpg", "7.jpg"]; // Add more filenames as needed

  // Upload each image
  await importImg(imageFiles, page);
});

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function importImg(images: string[], page: Page) {
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.click("text='Start uploading'");
  const fileChooser = await fileChooserPromise;
  for (const img of images) {
    const filePath = path.join(__dirname, "tests/upload/", img);
    await fileChooser.setFiles(filePath);
    const relativeFilePath = path.join(process.cwd(), "tests/upload/", img);
    await page.setInputFiles('input[type="file"]', relativeFilePath);
    await delay(2000);
    await fileChooserPromise;
  }
}
