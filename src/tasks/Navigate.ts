import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { HomePage } from '../ui/HomePage';
import { ElementsMenu } from '../ui/ElementsMenu';

export class NavigateTo {
  static Elements = () =>
    Task.where(`#actor navigates to Elements`,
      Click.on(HomePage.Card.Elements),
    );

  static TextBox = () =>
    Task.where(`#actor opens Text Box form`,
      Click.on(ElementsMenu.TextBox),
    );
}
