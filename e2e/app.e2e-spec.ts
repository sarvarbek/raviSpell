import { RaviSpellPage } from './app.po';

describe('ravi-spell App', () => {
  let page: RaviSpellPage;

  beforeEach(() => {
    page = new RaviSpellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
