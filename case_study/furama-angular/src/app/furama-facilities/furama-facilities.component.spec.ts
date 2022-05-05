import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaFacilitiesComponent } from './furama-facilities.component';

describe('FuramaFacilitiesComponent', () => {
  let component: FuramaFacilitiesComponent;
  let fixture: ComponentFixture<FuramaFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
