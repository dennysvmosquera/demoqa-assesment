import { configure } from '@serenity-js/core';
import { ConsoleReporter } from '@serenity-js/console-reporter';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';

export default configure({
  crew: [
    ConsoleReporter.withDefaultColourSupport(),
    new SerenityBDDReporter(),
  ],
});
