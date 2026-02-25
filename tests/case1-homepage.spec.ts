import { test } from '@serenity-js/playwright-test';
import { Open } from '../src/tasks/Open';
import { Verify } from '../src/tasks/VerifyHome';

test('Caso 1: Navegar a la página principal', async ({ actor }) => {
  await actor.attemptsTo(
    Open.theHomePage(),
    Verify.homeCardsAreVisible(),
  );
});
