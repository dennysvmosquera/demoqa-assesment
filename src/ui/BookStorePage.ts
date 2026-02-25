import { By, PageElement } from '@serenity-js/web';

export class BookStorePage {
  static SearchBox = PageElement.located(By.id('searchBox')).describedAs('Search box');
  static FirstResultTitle = PageElement.located(By.xpath('//*[@id="see-book-Git Pocket Guide"]/a'))
    .describedAs('First result book title link');

  //sin filas o tabla vacia
  static NoRowsFound = PageElement.located(By.xpath("//*[contains(normalize-space(.),'No rows found')]"))
    .describedAs('No rows found message');
}
