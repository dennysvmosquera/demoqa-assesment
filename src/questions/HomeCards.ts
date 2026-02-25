import { HomePage } from '../ui/HomePage';

export class HomeCards {
  static all = () => ([
    HomePage.Card.Elements,
    HomePage.Card.Forms,
    HomePage.Card.AlertsFrameWindows,
    HomePage.Card.Widgets,
    HomePage.Card.Interactions,
    HomePage.Card.BookStoreApplication,
  ]);
}
