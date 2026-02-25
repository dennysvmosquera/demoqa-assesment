import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export class Open {
  static theHomePage = () =>
    Task.where(`#actor opens DemoQA home page`,
      Navigate.to('/')   //usa baseURL del playwright.config.ts
    );
}
