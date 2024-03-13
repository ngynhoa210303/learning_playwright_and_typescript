/*
  CÁCH TÌM LINK TRONG TRANG WEB
*/

import { Page, expect, test } from "@playwright/test";
export async function search(page: Page) {
  await page.goto(
    "https://xtuneo.unaux.com/?utm_source=zalo&utm_medium=zalo&utm_campaign=zalo"
  );
  const links = await page.$$("a");
  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
  }
}
test("SearchLink", async ({ page }) => {
  await search(page);
});
