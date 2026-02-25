import { test } from '@serenity-js/playwright-test';

import { Open } from '../src/tasks/Open';
import { OpenAccordian } from '../src/tasks/OpenAccordian';
import { VerifyAccordian } from '../src/tasks/VerifyAccordian';

test('Caso 5 - Widgets: el acordeón se puede expandir y contraer', async ({ actor }) => {
  await actor.attemptsTo(
    Open.theHomePage(),
    OpenAccordian.page(),
    VerifyAccordian.canExpandAndCollapse(),
  );
});
