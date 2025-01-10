/* 
    npx playwright test   runs all tests on all browsers in headless mode
    npx playwright test --workers 3    runs with 3 workers in parallel
    npx playwright test  one.spec.js     runs a specific test file
    npx playwright test  one.spec.js  two.spec.js   runs the files specified
    npx playwright test  one  two      runs files that have one or two in the file name
    npx playwright test -g "check title"   runs test with the title
    npx playwright test --project=chromium  runs on specific browser
    npx playwright test --headed    runs tests in headed mode
    npx playwright test --debug    debug tests
    npx playwright test example.spec.js --debug debug specific test file
    npx playwright test example.spec.js:21 --debug debug starting from specific line where test(..  starts
    npx playwright test ".\\tests\\lenh\\lenh.spec.ts" mé
*/

/*
Gen code
-- Step 1 - Open terminal and run codegen   npx playwright codegen

-- Step 2 - Check 2 windows open - Browser and Playwright Inspector

--  Step 3 - Record your test steps and check the test scripts getting created

-- Step 4 - Save the recorded script in a test file | Run and check

1. Record on a specific browser (default:chromium) npx playwright codegen --browser firefox
2. Record and save to a file  npx playwright codegen --target javascript -o record_example.js

** Set viewport - screen resolution (size)  npx playwright codegen --viewport-size=800,600

** Emulate devices  npx playwright codegen --device="iPhone 11"
** Emulate color scheme (if available) npx playwright codegen --color-scheme=dark

 npx playwright test example.spec.ts  --project chromium --headed 
 --> Chạy tự động
*/
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://stage2.turbo-online.com/sign-in");
  // console.log(await page.title());

  // // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Turbo Online/);
});
