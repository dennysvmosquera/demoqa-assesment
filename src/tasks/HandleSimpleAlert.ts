import { Task, Interaction } from '@serenity-js/core';
import type { Page } from '@playwright/test';

export class HandleSimpleAlert {
  static trigger = (page: Page) =>
    Task.where(`#actor triggers the simple alert`,
      Interaction.where(`#actor clicks the alert button`, async () => {
        // Si ya hay un handler global que acepta el dialog, esto NO va a fallar.
        await page.locator('#alertButton').click();
      }),
    );
}