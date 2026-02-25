import { Task, Interaction } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { BrowserWindowsPage } from '../ui/BrowserWindowsPage';
import type { Page, Dialog } from '@playwright/test';

export class VerifyNewTabOpens {
  static viaNewTabButton = (page: Page) =>
    Task.where(`#actor opens a new tab and verifies it`,
      Interaction.where(`#actor waits for the new tab and verifies its content`, async () => {
        const [ newPage ] = await Promise.all([
          page.context().waitForEvent('page'),
        ]);

        await newPage.waitForLoadState('domcontentloaded');

        const heading = await newPage.locator('#sampleHeading').innerText();
        if (heading.trim() !== 'This is a sample page') {
          throw new Error(`Expected heading "This is a sample page", got: "${heading}"`);
        }

        await newPage.close();
      }),
      Click.on(BrowserWindowsPage.NewTabButton),
    );
}
