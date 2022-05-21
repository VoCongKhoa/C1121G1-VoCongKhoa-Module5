import { TestBed } from '@angular/core/testing';

import { VungMienService } from './vung-mien.service';

describe('VungMienService', () => {
  let service: VungMienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VungMienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
