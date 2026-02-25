import { By, PageElement } from '@serenity-js/web';

export class BrowserWindowsPage {
  static NewTabButton = PageElement.located(By.css('#tabButton'))
    .describedAs('New Tab button');
}
