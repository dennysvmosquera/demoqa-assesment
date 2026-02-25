import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { AlertsFrameWindowsMenu } from '../ui/AlertsFrameWindowsMenu';

export class OpenBrowserWindows {
  static page = () =>
    Task.where(`#actor opens Browser Windows page`,
      Click.on(AlertsFrameWindowsMenu.BrowserWindows),
    );
}
