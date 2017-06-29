import { ParellelmeridiansPage } from './app.po';

describe('parellelmeridians App', function() {
  let page: ParellelmeridiansPage;

  beforeEach(() => {
    page = new ParellelmeridiansPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
