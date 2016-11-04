import { TruckPage } from './app.po';

describe('truck App', function() {
  let page: TruckPage;

  beforeEach(() => {
    page = new TruckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
