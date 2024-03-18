import { test } from "@playwright/test";
import XLSX from "xlsx";

test("Read excel file data", async ({}) => {
  // Đọc dữ liệu từ file Excel
  const excelPath = "sample.xlsx";
  const excelData = readExcel(excelPath);

  // In dữ liệu từ file Excel
  console.log(excelData);
});

function readExcel(path: string) {
  const workbook = XLSX.readFile(path);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonSheet = XLSX.utils.sheet_to_json(sheet);
  return jsonSheet;
}
