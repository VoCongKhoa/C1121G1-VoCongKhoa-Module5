import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFacilityComponent } from './modal-facility.component';

describe('ModalFacilityComponent', () => {
  let component: ModalFacilityComponent;
  let fixture: ComponentFixture<ModalFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
