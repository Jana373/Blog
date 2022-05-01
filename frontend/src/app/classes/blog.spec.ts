import { Blog } from './blog';

describe('Blog', () => {
  let date = new Date()
  it('should create an instance', () => {
    expect(new Blog(0, "", "","","",date,"","")).toBeTruthy();
  });
});
