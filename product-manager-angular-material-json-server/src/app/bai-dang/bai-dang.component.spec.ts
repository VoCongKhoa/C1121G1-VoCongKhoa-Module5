import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiDangComponent } from './bai-dang.component';

describe('BaiDangComponent', () => {
  let component: BaiDangComponent;
  let fixture: ComponentFixture<BaiDangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiDangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiDangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
