import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNccComponent } from './modal-ncc.component';

describe('ModalNccComponent', () => {
  let component: ModalNccComponent;
  let fixture: ComponentFixture<ModalNccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
