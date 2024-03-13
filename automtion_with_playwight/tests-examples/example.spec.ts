// import { test, expect } from "@playwright/test";

// test("Page Sign in", async ({ page }) => {
//   await page.goto("https://stage2.turbo-online.com/sign-in");
//   //check if image exists
//   // const image = page.waitForSelector(
//   //   "//html/body/app-root/layout/empty-layout/div/div/auth-sign-in/div/div/div/div[1]/img"
//   // );
//   // expect(image).not.toBeNull();

//   //label tồn tại
//   const signIn = await page.waitForSelector(
//     "//html/body/app-root/layout/empty-layout/div/div/auth-sign-in/div/div/div/div[2]/div"
//   );
//   await expect(signIn).not.toBeNull();
//   // if (signInDivExists) {
//   //   console.log("Phần tử 'Sign in' tồn tại trên trang.");
//   // } else {
//   //   console.log("Phần tử 'Sign in' không tồn tại trên trang.");
//   // }

//   //link tồn tại
//   // await page.getByRole("link", { name: "Turbo Images." }).click();//Link

//   //dropdown
//   // await page.selectOption('select[name="dropdown"]', { label: "English" });??

//   // //ptu signin co co chữ 32
//   // const chu = await page.waitForSelector(
//   //   "//html/body/app-root/layout/empty-layout/div/div/auth-sign-in/div/div/div/div[2]/div"
//   // );

//   // // Lấy kích thước font của chữ
//   // const fontSize = await chu.evaluate((element) => {
//   //   const style = window.getComputedStyle(element);
//   //   return style.getPropertyValue("font-size");
//   // });

//   // // Kiểm tra xem kích thước font của chữ có bằng 32px hay không
//   // expect(fontSize).toBe("32px");
// });
// test("check language switching", async ({ page }) => {03
//   await page.goto("https://stage2.turbo-online.com/sign-in"); // Thay URL bằng URL của trang web của bạn

//   // Chọn ngôn ngữ tiếng Anh từ combobox
//   await page.selectOption('select[name="language"]', { label: "English" });

//   // Kiểm tra văn bản trên trang web đã được chuyển sang tiếng Anh
//   const isTextInEnglish = await page.evaluate(() => {
//     // Danh sách các từ hoặc cụm từ tiếng Anh mà bạn mong đợi
//     const expectedEnglishWords = [
//       "Select language",
//       "Select language",
//       "Login",
//       "Sign in",
//     ];

//     // Lấy tất cả các phần tử văn bản trên trang web
//     const allTextElements = document.querySelectorAll("body *");

//     // Kiểm tra từng phần tử văn bản
//     for (const element of allTextElements) {
//       const text = element.textContent?.trim();

//       // Kiểm tra xem văn bản có chứa từ hoặc cụm từ tiếng Anh mong đợi không
//       if (text && expectedEnglishWords.every((word) => text.includes(word))) {
//         return true; // Trả về true nếu tất cả các từ tiếng Anh đều được tìm thấy
//       }
//     }
//     return false; // Trả về false nếu không tìm thấy bất kỳ từ tiếng Anh nào
//   });

//   // Kiểm tra xem văn bản đã được chuyển sang tiếng Anh hay không
//   expect(isTextInEnglish).toBe(true);
// });
// test("Page Sign in", async ({ page }) => {
//     await page.goto("https://stage2.turbo-online.com/sign-in");
//   //   //check if image exists
//   //   // const image = page.waitForSelector(
//   //   //   "//html/body/app-root/layout/empty-layout/div/div/auth-sign-in/div/div/div/div[1]/img"
//   //   // );
//   //   // expect(image).not.toBeNull();
// })
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://stage2.turbo-online.com/sign-in?redirectURL=%2F");
  await page.getByLabel("Email address *").click();
  await page.getByLabel("Email address *").fill("anhdh.bhsoft+1@gmail.com");
  await page.getByRole("button", { name: "Login" }).click();
  await page.locator("form > div:nth-child(1) > label").fill("8");
  await page.locator("//form/div[2]/label").fill("8");
  await page.locator("#ngx-otp-input-2").fill("8");
  await page.locator("#ngx-otp-input-3").fill("8");
  await page.locator("#ngx-otp-input-4").fill("8");
  await page.locator("#ngx-otp-input-5").fill("8");
  await page.getByRole("button", { name: "Verify code" }).click();
  // const url = page.url();
  // expect(url).toEqual(
  //   "https://stage2.turbo-online.com/sign-in?redirectURL=%2F"
  // );
});
