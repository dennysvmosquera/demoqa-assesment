import { By, PageElement } from '@serenity-js/web';

export class WidgetsMenu {
  static Accordian = PageElement.located(By.xpath("//span[normalize-space()='Accordian']"))
    .describedAs('Accordian menu item');
}
