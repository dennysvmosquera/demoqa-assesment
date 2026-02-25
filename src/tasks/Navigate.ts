import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { HomePage } from '../ui/HomePage';
import { ElementsMenu } from '../ui/ElementsMenu';
import { By, PageElement } from '@serenity-js/web'; 

export class NavigateTo {
  static Elements = () =>
    Task.where(`#actor navigates to Elements`,
      Click.on(HomePage.Card.Elements),
    );

  static TextBox = () =>
    Task.where(`#actor opens Text Box form`,
      Click.on(ElementsMenu.TextBox),
    );

  static Forms = () =>
    Task.where(`#actor navigates to Forms`,
        Click.on(PageElement.located(By.xpath("//h5[normalize-space()='Forms']")).describedAs('Forms card')),
    );
}
