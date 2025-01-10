import { expect, test } from "@playwright/test";
// Tài liệu ở: https://playwright.dev/docs/api/class-genericassertions#generic-assertions-to-be-truthy
// test("FUNC upon successful login", async ({ page }) => {
//   await page.goto("https://stage2.turbo-online.com/sign-in");
//   // Sign in success
//   await page.getByLabel("Email address *").click();
//   await page.getByLabel("Email address *").fill("anhdh.bhsoft+1@gmail.com");
//   await page.getByRole("button", { name: "Login" }).click();
//   const pageContainsEmailVerification = await page.textContent(
//     "body >> text=Email Verification"
//   );
//   expect(pageContainsEmailVerification).toBeTruthy();
// });
//CHẠY  npx playwright test ".\\tests\\api-testing\\hi.spec.ts"  --ui
//get
test("API with playwright", async ({ request }) => {
  const respone = await request.get(
    "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district",
    {
      headers: {
        token: "62124d79-4ffa-11ee-b1d4-92b443b7a897",
      },
    }
  );
  expect(respone.status()).toBe(200);
});

//Post
// test("Post with playwright", async ({ request }) => {
//   const response = await request.post("https://reqres.in/api/users/2", {
//     data: {
//       name: "Raghav",
//       job: "teacher",
//     },
//   });
//   expect(response.status()).toBe(201);
// });

// //put
// test("Put with playwright", async ({ request }) => {
//   const response = await request.put("https://reqres.in/api/users/2", {
//     //phải có index
//     data: {
//       name: "Raghav",
//       job: "teacher",
//     },
//   });
//   expect(response.status()).toBe(200);
//   const text = await response.text();
//   expect(text).toContain("Raghav");
// });

// //delete
// test("Demo API DELETE Request", async ({ request }) => {
//   const response = await request.delete("https://reqres.in/api/users/2");
//   expect(response.status()).toBe(204);
// });
