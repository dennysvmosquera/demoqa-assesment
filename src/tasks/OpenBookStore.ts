import { Task } from '@serenity-js/core';
import { Click, Scroll } from '@serenity-js/web';
import { BookStoreMenu } from '../ui/BookStoreMenu';

export class OpenBookStore {
  static page = () =>
    Task.where(`#actor opens Book Store page`,
      Scroll.to(BookStoreMenu.BookStore),
      Click.on(BookStoreMenu.BookStore),
    );
}
