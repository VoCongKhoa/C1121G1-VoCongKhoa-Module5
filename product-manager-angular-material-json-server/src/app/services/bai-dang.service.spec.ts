import { TestBed } from '@angular/core/testing';

import { BaiDangService } from './bai-dang.service';

describe('BaiDangService', () => {
  let service: BaiDangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaiDangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
