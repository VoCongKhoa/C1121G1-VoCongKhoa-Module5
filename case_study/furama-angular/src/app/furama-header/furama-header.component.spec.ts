import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaHeaderComponent } from './furama-header.component';

describe('FuramaHeaderComponent', () => {
  let component: FuramaHeaderComponent;
  let fixture: ComponentFixture<FuramaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
