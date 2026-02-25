import { Task, Interaction } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { AlertsPage } from '../ui/AlertsPage';
import type { Page, Dialog } from '@playwright/test';

export class HandleSimpleAlert {
  static accept = (page: Page) =>
    Task.where(`#actor triggers and accepts a simple alert`,
      Interaction.where(`#actor accepts the alert dialog`, async () => {
        page.once('dialog', async (dialog: Dialog) => {
          await dialog.accept();
        });
      }),
      Click.on(AlertsPage.SimpleAlertButton),
    );
}