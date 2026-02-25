import { By, PageElement } from '@serenity-js/web';

export class HomePage {
  static Card = {
    Elements: PageElement.located(By.xpath("//h5[normalize-space()='Elements']")).describedAs('Elements card'),
    Forms: PageElement.located(By.xpath("//h5[normalize-space()='Forms']")).describedAs('Forms card'),
    AlertsFrameWindows: PageElement.located(By.xpath("//h5[normalize-space()='Alerts, Frame & Windows']")).describedAs('Alerts, Frame & Windows card'),
    Widgets: PageElement.located(By.xpath("//h5[normalize-space()='Widgets']")).describedAs('Widgets card'),
    Interactions: PageElement.located(By.xpath("//h5[normalize-space()='Interactions']")).describedAs('Interactions card'),
    BookStoreApplication: PageElement.located(By.xpath("//h5[normalize-space()='Book Store Application']")).describedAs('Book Store Application card'),
  };
}