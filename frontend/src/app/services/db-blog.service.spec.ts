import { TestBed } from '@angular/core/testing';

import { DbBlogService } from './db-blog.service';

describe('DbBlogService', () => {
  let service: DbBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
