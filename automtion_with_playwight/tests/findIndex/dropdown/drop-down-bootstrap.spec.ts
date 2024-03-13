import { test, expect } from "@playwright/test";

test("Boostrap dropdown", async ({ page }) => {
  await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

  await page.locator(".multiselect").click(); // click on the dropdown

  //C1 ĐẾM VÀ SO SÁNH SỐ PTU CÓ TRONG DROPDOWN
  //const options=await page.locator('ul>li label input')
  //await expect(options).toHaveCount(11);
  //C2
  //const options=await page.$$('ul>li label input')
  //await expect(options.length).toBe(11)

  //** */ LẤY VALUE CỦA PTU CÓ TRONG DROPDOWN
  //   3/
  /*const options=await page.$$('ul>li label')
    for(let option of options)
    {
        const value=await option.textContent();
        //console.log("value is",value)
        if(value.includes('Angular') || value.includes('Java'))
        {
            await option.click()
        }

    }*/

  // delect options: bỏ chọn
  const options = await page.$$("ul>li label");
  for (let option of options) {
    const value = await option.textContent();
    //console.log("value is",value)
    if (value?.includes("HTML") || value?.includes("CSS")) {
      await option.click();
    }
  }

  await page.waitForTimeout(5000);
});
