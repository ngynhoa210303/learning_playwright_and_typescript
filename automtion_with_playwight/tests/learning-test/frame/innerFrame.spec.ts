import { test, expect } from "@playwright/test";

test("Inner frames", async ({ page }: { page: any }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame3 = (await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  })) as any; // 'as any' is used here because 'frame3' is dynamically typed

  //frame3.locator("input[name='mytext3']").fill('welcome')

  //nested frame
  const childFrames = frame3?.childFrames();
  if (childFrames && childFrames.length > 0) {
    //locator in childFrame
    //chọn ptu con đầu tiên đánh check radiobtn
    await childFrames[0].locator("//*[@id='i5']/div[3]/div").check();
  } else {
    console.error("No child frames found.");
  }

  await page.waitForTimeout(5000);
});
