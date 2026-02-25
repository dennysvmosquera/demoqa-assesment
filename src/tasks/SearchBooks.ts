import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';
import { BookStorePage } from '../ui/BookStorePage';

export class SearchBooks {
  static for = (term: string) =>
    Task.where(`#actor searches books for "${ term }"`,
      Enter.theValue(term).into(BookStorePage.SearchBox),
    );
}
