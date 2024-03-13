/*
  CÁCH TÌM LINK TRONG TRANG WEB
*/

import { Page, expect, test } from "@playwright/test";
export async function search(page: Page) {
  await page.goto("https://cellphones.com.vn/");
  const links = await page.$$(
    "//div[@class='swiper-slide swiper-slide-active']//div//div//div//h3"
  );
  for (const link of links) {
    const linkText = await link.textContent();
    if (linkText === "Samsung Galaxy S24 Ultra 12GB 256GB") {
      link.click();
      page.pause();
    }
  }
}
test("SearchLink", async ({ page }) => {
  await search(page);
});
