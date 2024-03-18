import { test, expect } from "@playwright/test";
import { LoginPage } from "./logic/login";
import path from "path";

test("Fill input fields from Excel", async ({ page, browser }) => {
  // const excelPath = "sample.xlsx";
  const excelDirectory = path.join(__dirname, "db");

  // Tên file Excel
  const excelFilename = "sample.xlsx";

  // Tạo đường dẫn tuyệt đối đến file Excel
  const excelPath = path.join(excelDirectory, excelFilename);

  const loginPage = new LoginPage(page);
  await loginPage.fillInputsFromExcel(excelPath);
  delay(2000);
});
export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
