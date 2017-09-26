import { SearchBlogPage } from './app.po';

describe('search-blog App', () => {
  let page: SearchBlogPage;

  beforeEach(() => {
    page = new SearchBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
