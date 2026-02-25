import { Task } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { isVisible, Text } from '@serenity-js/web';
import { PracticeForm } from '../ui/PracticeForm';

export class VerifyPracticeForm {
  static submissionSucceeded = () =>
    Task.where(`#actor verifies Practice Form submission succeeded`,
      Ensure.that(PracticeForm.ModalTitle, isVisible()),
      Ensure.that(Text.of(PracticeForm.ModalTitle), equals('Thanks for submitting the form')),
    );
}
