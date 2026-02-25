import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { HomePage } from '../ui/HomePage';

export class NavigateToAlertsFrameWindows {
  static section = () =>
    Task.where(`#actor navigates to Alerts, Frame & Windows`,
      Click.on(HomePage.Card.AlertsFrameWindows),
    );
}
