import { TestBed } from '@angular/core/testing';

import { HuongService } from './huong.service';

describe('HuongService', () => {
  let service: HuongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
