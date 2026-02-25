import { By, PageElement } from '@serenity-js/web';

export class AlertsPage {
  static SimpleAlertButton = PageElement.located(By.css('#alertButton'))
    .describedAs('Simple alert button');
}
