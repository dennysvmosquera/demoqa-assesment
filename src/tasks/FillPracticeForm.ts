import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';
import { PracticeForm } from '../ui/PracticeForm';

export type PracticeFormData = {
  firstName: string;
  lastName: string;
  gender: 'Male' | 'Female' | 'Other';
  mobile: string;  
};

export class FillPracticeForm {
  static with = (data: PracticeFormData) =>
    Task.where(`#actor fills Practice Form required fields`,
      Enter.theValue(data.firstName).into(PracticeForm.FirstName),
      Enter.theValue(data.lastName).into(PracticeForm.LastName),
      Click.on(PracticeForm.GenderLabel[data.gender]),
      Enter.theValue(data.mobile).into(PracticeForm.Mobile),
    );
}
