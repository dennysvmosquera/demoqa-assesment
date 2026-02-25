import { configure } from '@serenity-js/core';
import { ConsoleReporter } from '@serenity-js/console-reporter';

export default configure({
  crew: [
    ConsoleReporter.withDefaultColourSupport(),
  ],
});
