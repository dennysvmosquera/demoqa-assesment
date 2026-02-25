import { Task } from '@serenity-js/core';
import { Click, Scroll } from '@serenity-js/web';
import { PracticeForm } from '../ui/PracticeForm';

export class SubmitPracticeForm {
  static now = () =>
    Task.where(`#actor submits Practice Form`,
      Scroll.to(PracticeForm.Submit),
      Click.on(PracticeForm.Submit),
    );
}
