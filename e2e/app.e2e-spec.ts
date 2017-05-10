import { BuildBuddyPage } from './app.po';

describe('build-buddy App', () => {
  let page: BuildBuddyPage;

  beforeEach(() => {
    page = new BuildBuddyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
