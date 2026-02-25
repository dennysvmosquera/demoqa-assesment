import { Task } from '@serenity-js/core';
import { Click, Scroll } from '@serenity-js/web';
import { HomePage } from '../ui/HomePage';

export class NavigateToBookStoreApp {
  static section = () =>
    Task.where(`#actor navigates to Book Store Application section`,
      Scroll.to(HomePage.Card.BookStoreApplication),
      Click.on(HomePage.Card.BookStoreApplication),
    );
}
