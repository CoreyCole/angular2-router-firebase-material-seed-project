import { ServerBellhappPage } from './app.po';

describe('server-bellhapp App', function() {
  let page: ServerBellhappPage;

  beforeEach(() => {
    page = new ServerBellhappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
