import { test, chromium } from "@playwright/test";
import { signInSuccess } from "../sign-in/funcSignIn.spec";
import {
  verificationCodeCustom,
  delay,
} from "../sign-in/verificationSignIn.spec";
/*
Tại file playwright.config.ts ở 
use: {
  video: "on",
  // launchOptions: {
  //   slowMo: 1000,
  // },
  // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer 
  trace: "on-first-retry",
},
Hoặc config = code
*/
test("Slow and config video", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  });
  const context = await browser.newContext({
    recordVideo: {
      dir: "video/",
      size: { width: 800, height: 600 },
    },
  });

  const page = await context.newPage();
  await signInSuccess(page);
  await verificationCodeCustom(page);
  await context.close();
});
