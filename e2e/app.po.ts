import { browser, element, by } from 'protractor';

export class HeyBaristaCuppingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cupping-root h1')).getText();
  }
}
