import { HeyBaristaCuppingPage } from './app.po';

describe('hey-barista-cupping App', () => {
  let page: HeyBaristaCuppingPage;

  beforeEach(() => {
    page = new HeyBaristaCuppingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cupping works!');
  });
});
