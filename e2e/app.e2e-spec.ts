import { MahyoungmayhemPage } from './app.po';

describe('mahyoungmayhem App', () => {
  let page: MahyoungmayhemPage;

  beforeEach(() => {
    page = new MahyoungmayhemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
