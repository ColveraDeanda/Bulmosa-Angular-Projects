import { TestBed } from '@angular/core/testing';

import { DbzServiceService } from './dbz-service.service';

describe('DbzServiceService', () => {
  let service: DbzServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbzServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
