import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { AlertsFrameWindowsMenu } from '../ui/AlertsFrameWindowsMenu';

export class OpenAlerts {
  static page = () =>
    Task.where(`#actor opens Alerts page`,
      Click.on(AlertsFrameWindowsMenu.Alerts),
    );
}
