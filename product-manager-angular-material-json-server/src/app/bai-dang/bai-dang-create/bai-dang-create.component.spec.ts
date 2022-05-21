import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiDangCreateComponent } from './bai-dang-create.component';

describe('BaiDangCreateComponent', () => {
  let component: BaiDangCreateComponent;
  let fixture: ComponentFixture<BaiDangCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiDangCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiDangCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
