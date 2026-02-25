import { test } from '@serenity-js/playwright-test';
import { Navigate, Page } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';

test('Actor can open DemoQA homepage', async ({ actor }) => {

  await actor.attemptsTo(
    Navigate.to('https://demoqa.com'),
    Ensure.that(
      Page.current().title(),
      includes('demosite')
    )
  );

});
