import { test } from '@playwright/test';
import { actorCalled } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';

import { Open } from '../src/tasks/Open';
import { NavigateToAlertsFrameWindows } from '../src/tasks/NavigateToAlertsFrameWindows';
import { OpenAlerts } from '../src/tasks/OpenAlerts';
import { HandleSimpleAlert } from '../src/tasks/HandleSimpleAlert';
import { OpenBrowserWindows } from '../src/tasks/OpenBrowserWindows';
import { VerifyNewTabOpens } from '../src/tasks/VerifyNewTabOpens';

test('Caso 4 - Alerts & Windows: aceptar alerta y abrir nueva pestaña', async ({ page }) => {

  const actor = actorCalled('Dennys').whoCan(
    BrowseTheWebWithPlaywright.usingPage(page as any),
  );

  await actor.attemptsTo(
    Open.theHomePage(),
    NavigateToAlertsFrameWindows.section(),

    OpenAlerts.page(),
    HandleSimpleAlert.accept(page),

    OpenBrowserWindows.page(),
    VerifyNewTabOpens.viaNewTabButton(page),
  );
});