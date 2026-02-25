import { test } from '@serenity-js/playwright-test';
import { actorCalled } from '@serenity-js/core';

import { HandleSimpleAlert } from '../src/tasks/HandleSimpleAlert';
import { VerifyNewTabOpens } from '../src/tasks/VerifyNewTabOpens';

test('Caso 4: Section Alerts, Frame & Windows', async ({ page }) => {

  const actor = actorCalled('Dennys');

  await actor.attemptsTo(
    HandleSimpleAlert.trigger(page),
    VerifyNewTabOpens.viaNewTabButton(page),
  );
});