import { MusiQFrontPage } from './app.po';

describe('musi-q-front App', function() {
  let page: MusiQFrontPage;

  beforeEach(() => {
    page = new MusiQFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
