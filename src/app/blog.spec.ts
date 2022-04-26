import { Blog } from './blog';

describe('Blog', () => {
  it('should create an instance', () => {
    expect(new Blog(0, "", "")).toBeTruthy();
  });
});
