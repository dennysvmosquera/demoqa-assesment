import { By, PageElement } from '@serenity-js/web';

export class AccordianPage {
  static Heading = { 
    WhatIsLoremIpsum: PageElement.located(By.xpath("//*[@id='accordianContainer']/div/div[1]/h2/button"))
      .describedAs('Heading: What is Lorem Ipsum?'),

    WhereDoesItComeFrom: PageElement.located(By.xpath("//*[@id='accordianContainer']/div/div[2]/h2/button"))
      .describedAs('Heading: Where does it come from?'),
  };

  static Content = {
    WhatIsLoremIpsum: PageElement.located(By.xpath("//*[@id='accordianContainer']/div/div[1]/div/div/p"))
      .describedAs('Content: What is Lorem Ipsum?'),

    WhereDoesItComeFrom: PageElement.located(By.xpath("//*[@id='accordianContainer']/div/div[2]/div/div/p[1]"))
      .describedAs('Content: Where does it come from?'),
  };
}
