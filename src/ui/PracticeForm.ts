import { By, PageElement } from '@serenity-js/web';

export class PracticeForm {
  static FirstName = PageElement.located(By.css('#firstName')).describedAs('First Name');
  static LastName  = PageElement.located(By.css('#lastName')).describedAs('Last Name');
  static Mobile    = PageElement.located(By.css('#userNumber')).describedAs('Mobile');

  // Gender radios are hidden; click the label
  static GenderLabel = {
    Male:   PageElement.located(By.css("label[for='gender-radio-1']")).describedAs('Gender Male'),
    Female: PageElement.located(By.css("label[for='gender-radio-2']")).describedAs('Gender Female'),
    Other:  PageElement.located(By.css("label[for='gender-radio-3']")).describedAs('Gender Other'),
  };

  static Submit = PageElement.located(By.css('#submit')).describedAs('Submit button');

  // Confirmation modal
  static ModalTitle = PageElement.located(By.css('#example-modal-sizes-title-lg')).describedAs('Confirmation modal title');
}
