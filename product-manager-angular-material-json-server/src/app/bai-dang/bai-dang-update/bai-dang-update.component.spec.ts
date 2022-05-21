import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiDangUpdateComponent } from './bai-dang-update.component';

describe('BaiDangUpdateComponent', () => {
  let component: BaiDangUpdateComponent;
  let fixture: ComponentFixture<BaiDangUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiDangUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiDangUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
