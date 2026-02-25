import { test } from '@serenity-js/playwright-test';

import { Open } from '../src/tasks/Open';
import { NavigateTo } from '../src/tasks/Navigate';
import { Fill } from '../src/tasks/Fill';
import { VerifyTextBox } from '../src/tasks/VerifyTextBox';

test('Caso 2: Section Elements – Text Box', async ({ actor }) => {
  const data = {
    fullName: 'Dennys Mosquera',
    email: 'dennys.qa@test.com',
  };

  await actor.attemptsTo(
    Open.theHomePage(),
    NavigateTo.Elements(),
    NavigateTo.TextBox(),
    Fill.TextBoxFormWith(data),
    VerifyTextBox.submissionShows(data),
  );
});
