import { Task } from '@serenity-js/core';
import { Ensure, includes } from '@serenity-js/assertions';
import { Click, Text as WebText } from '@serenity-js/web';
import { AccordianPage } from '../ui/AccordianPage';

export class VerifyAccordian {
  static canExpandAndCollapse = () =>
    Task.where(`#actor verifies accordian can expand and collapse`,
      Click.on(AccordianPage.Heading.WhatIsLoremIpsum),
      Ensure.that(WebText.of(AccordianPage.Content.WhatIsLoremIpsum), includes('Lorem')),

      Click.on(AccordianPage.Heading.WhereDoesItComeFrom),
      Ensure.that(WebText.of(AccordianPage.Content.WhereDoesItComeFrom), includes('Contrary')),
    );
}
