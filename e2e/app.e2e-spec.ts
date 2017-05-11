import { NgScrollPage } from './app.po';

describe('ng-scroll App', () => {
  let page: NgScrollPage;

  beforeEach(() => {
    page = new NgScrollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
