import { By, PageElement } from '@serenity-js/web';

export class ElementsMenu {
  static TextBox = PageElement.located(By.xpath("//span[normalize-space()='Text Box']"))
    .describedAs('Text Box menu item');
}
