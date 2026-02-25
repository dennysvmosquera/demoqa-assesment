import { By, PageElement } from '@serenity-js/web';

export class AlertsFrameWindowsMenu {
  static Alerts = PageElement.located(By.xpath("//span[normalize-space()='Alerts']"))
    .describedAs('Alerts menu item');

  static BrowserWindows = PageElement.located(By.xpath("//span[normalize-space()='Browser Windows']"))
    .describedAs('Browser Windows menu item');
}
