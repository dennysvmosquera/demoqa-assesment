import { Task, Interaction } from '@serenity-js/core';
import type { Page } from '@playwright/test';

export class VerifyNewTabOpens {

  static viaNewTabButton = (page: Page) =>
    Task.where(`#actor opens a new tab and verifies it`,

      Interaction.where(`#actor opens new tab`, async () => {

        //tuve que poner explicito a donde queria ir
        await page.goto('https://demoqa.com/browser-windows', {
          waitUntil: 'domcontentloaded',
        });

        const btn = page.locator('#tabButton');

        await btn.waitFor({ state: 'visible', timeout: 10000 });
        const popupPromise = page.waitForEvent('popup');
        await btn.click();

        //para esperar que se abra la nueva pagina
        const newPage = await popupPromise;

        await newPage.waitForLoadState('domcontentloaded');

        const heading = (await newPage.locator('#sampleHeading').innerText()).trim();
        if (heading !== 'This is a sample page') {
          throw new Error(`Expected "This is a sample page", got: "${heading}"`);
        }

        await newPage.close();
      }),
    );
}