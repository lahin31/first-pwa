import { NgPwa2Page } from './app.po';

describe('ng-pwa2 App', () => {
  let page: NgPwa2Page;

  beforeEach(() => {
    page = new NgPwa2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
