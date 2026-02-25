import { test } from '@serenity-js/playwright-test';

import { Open } from '../src/tasks/Open';
import { NavigateToBookStoreApp } from '../src/tasks/NavigateToBookStoreApp';
import { OpenBookStore } from '../src/tasks/OpenBookStore';
import { SearchBooks } from '../src/tasks/SearchBooks';
import { VerifyBookSearch } from '../src/tasks/VerifyBookSearch';

test('Caso 7: Book Store Application – Búsqueda de Libros', async ({ actor }) => {
  const term = 'Git';

  await actor.attemptsTo(
    Open.theHomePage(),
    NavigateToBookStoreApp.section(),
    OpenBookStore.page(),
    SearchBooks.for(term),
    VerifyBookSearch.firstResultContains(term),
  );
});
