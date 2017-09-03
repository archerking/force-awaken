import { ForceAwakenPage } from './app.po';

describe('force-awaken App', function() {
  let page: ForceAwakenPage;

  beforeEach(() => {
    page = new ForceAwakenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
