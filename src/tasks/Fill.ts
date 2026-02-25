import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';
import { TextBoxForm } from '../ui/TextBoxForm';

export class Fill {
  static TextBoxFormWith = (data: { fullName: string; email: string }) =>
    Task.where(`#actor fills Text Box form`,
      Enter.theValue(data.fullName).into(TextBoxForm.FullName),
      Enter.theValue(data.email).into(TextBoxForm.Email),
    );
}
