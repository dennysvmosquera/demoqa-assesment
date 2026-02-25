import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { FormsPage } from '../ui/FormsPage';

export class OpenPracticeForm {
  static fromSidebar = () =>
    Task.where(`#actor opens Practice Form`,
      Click.on(FormsPage.PracticeForm),
    );
}
