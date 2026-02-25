import { By, PageElement } from '@serenity-js/web';

export class TextBoxForm {
  static FullName = PageElement.located(By.id('userName')).describedAs('Full Name input');
  static Email = PageElement.located(By.id('userEmail')).describedAs('Email input');
  static Submit = PageElement.located(By.id('submit')).describedAs('Submit button');

  static OutputName  = PageElement.located(By.id('name')).describedAs('Submitted name');
  static OutputEmail = PageElement.located(By.id('email')).describedAs('Submitted email');
}
