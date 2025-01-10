import { Page } from "playwright";

export class DatePicker {
  year: any;
  month: any;
  page: Page;
  year_locator: any;
  month_locator: any;
  day_locator: any;
  constructor(year: any, month: any, page: Page) {
    this.year = year;
    this.month = month;
    this.page = page;
    this.year_locator = this.page.locator(".ui-datepicker-year");
    this.month_locator = this.page.locator(".ui-datepicker-month");
  }
  async action() {
    await this.page.click("#datepicker");
    //bấm pre đến khi curr=value.year
    while (true) {
      const currentYear = await this.year_locator.textContent();
      const currentMonth = await this.month_locator.textContent();
      console.log(currentYear);

      if (currentYear == this.year && currentMonth == this.month) {
        break;
      }
      // await this.page.locator('[title="Next"]').click() //Next
      await this.page.locator('[title="Prev"]').click(); //Previous
    }
  }
}
