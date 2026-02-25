import { By, PageElement } from '@serenity-js/web';

export class SamplePage {
  static Heading = PageElement.located(By.css('#sampleHeading'))
    .describedAs('Sample page heading');
}
