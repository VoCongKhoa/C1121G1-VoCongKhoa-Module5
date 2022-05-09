import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFacilitiesComponent } from './create-facilities.component';

describe('CreateFacilitiesComponent', () => {
  let component: CreateFacilitiesComponent;
  let fixture: ComponentFixture<CreateFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
