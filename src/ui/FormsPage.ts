import { By, PageElement } from '@serenity-js/web';

export class FormsPage {
  static PracticeForm = PageElement.located(By.xpath("//span[normalize-space()='Practice Form']"))
    .describedAs('Practice Form menu item');
}
