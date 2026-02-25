import { Task } from '@serenity-js/core';
import { Ensure } from '@serenity-js/assertions';
import { HomeCards } from '../questions/HomeCards';
import { isVisible, Scroll } from '@serenity-js/web';
import { HomePage } from '../ui/HomePage';


export class Verify {
  static homeCardsAreVisible = () =>
    Task.where(`#actor verifies that all home cards are visible`,
        Scroll.to(HomePage.Card.BookStoreApplication),
      ...HomeCards.all().map(card => Ensure.that(card, isVisible())),
    );
}
