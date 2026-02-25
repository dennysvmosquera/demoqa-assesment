import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export class OpenAccordian {
  static page = () =>
    Task.where(`#actor opens Accordian page`,
      Navigate.to('/accordian'),
    );
}
