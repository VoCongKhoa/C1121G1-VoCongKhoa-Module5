import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiDangDeleteComponent } from './bai-dang-delete.component';

describe('BaiDangDeleteComponent', () => {
  let component: BaiDangDeleteComponent;
  let fixture: ComponentFixture<BaiDangDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiDangDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiDangDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
