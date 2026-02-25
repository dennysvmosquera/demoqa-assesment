import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    headless: false,
    baseURL: 'https://demoqa.com',
  },
  reporter: [
    [ '@serenity-js/playwright-test', {
        crew: [
          '@serenity-js/console-reporter'
        ]
      }
    ]
  ],
});
