import { Task } from '@serenity-js/core';
import { Ensure, includes } from '@serenity-js/assertions';
import { Text as WebText } from '@serenity-js/web';
import { BookStorePage } from '../ui/BookStorePage';

export class VerifyBookSearch {
  static firstResultContains = (term: string) =>
    Task.where(`#actor verifies search results contain "${ term }"`,
      Ensure.that(WebText.of(BookStorePage.FirstResultTitle), includes(term)),
    );
}
