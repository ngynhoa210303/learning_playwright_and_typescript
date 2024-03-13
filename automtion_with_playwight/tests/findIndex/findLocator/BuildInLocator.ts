import { Page } from "playwright";

export class Building {
  text: any;
  button_type: any;
  constructor(page: Page, abc: string) {
    this.text = page.getByPlaceholder("Username").fill(abc);
    this.button_type = page
      .getByRole("row", { name: 'POMERL0003 80" X 64" Per unit' })
      .getByRole("button");
  }
  async building() {
    await this.button_type.click();
  }
}
