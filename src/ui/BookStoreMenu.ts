import { By, PageElement } from '@serenity-js/web';

export class BookStoreMenu {
  static BookStore = PageElement.located(By.xpath("//span[normalize-space()='Book Store']"))
    .describedAs('Book Store menu item');
}
