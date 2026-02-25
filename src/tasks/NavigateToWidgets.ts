import { Task } from '@serenity-js/core';
import { Ensure, isPresent } from '@serenity-js/assertions';
import { Click, Scroll, isVisible } from '@serenity-js/web';
import { HomePage } from '../ui/HomePage';

export class NavigateToWidgets {
  static section = () =>
    Task.where(`#actor navigates to Widgets section`,
      Scroll.to(HomePage.Card.Widgets),
      Click.on(HomePage.Card.Widgets),
    );
}
