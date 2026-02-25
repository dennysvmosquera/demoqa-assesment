import { test } from '@serenity-js/playwright-test';

import { Open } from '../src/tasks/Open';
import { NavigateTo } from '../src/tasks/Navigate';
import { OpenPracticeForm } from '../src/tasks/OpenPracticeForm';
import { FillPracticeForm } from '../src/tasks/FillPracticeForm';
import { SubmitPracticeForm } from '../src/tasks/SubmitPracticeForm';
import { VerifyPracticeForm } from '../src/tasks/VerifyPracticeForm';

test('Caso 3: Section Forms – Practice Form', async ({ actor }) => {
  await actor.attemptsTo(
    Open.theHomePage(),
    NavigateTo.Forms(),
    OpenPracticeForm.fromSidebar(),
    FillPracticeForm.with({
      firstName: 'Dennys',
      lastName: 'Mosquera',
      gender: 'Female',
      mobile: '3001234567',
    }),
    SubmitPracticeForm.now(),
    VerifyPracticeForm.submissionSucceeded(),
  );
});
