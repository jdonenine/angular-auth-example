import { AngularAuthExamplePage } from './app.po';

describe('angular-auth-example App', () => {
  let page: AngularAuthExamplePage;

  beforeEach(() => {
    page = new AngularAuthExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
