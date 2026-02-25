import { Task } from '@serenity-js/core';
import { Ensure, includes } from '@serenity-js/assertions';
import { Click, Scroll, Text } from '@serenity-js/web';
import { TextBoxForm } from '../ui/TextBoxForm';

export class VerifyTextBox {
  static submissionShows = (data: { fullName: string; email: string }) =>
    Task.where(`#actor submits Text Box form and verifies output`,
      Scroll.to(TextBoxForm.Submit),
      Click.on(TextBoxForm.Submit),

      Ensure.that(Text.of(TextBoxForm.OutputName),  includes(data.fullName)),
      Ensure.that(Text.of(TextBoxForm.OutputEmail), includes(data.email)),
    );
}
