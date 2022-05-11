import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProgressBarComponent } from './angular-progress-bar.component';

describe('AngularProgressBarComponent', () => {
  let component: AngularProgressBarComponent;
  let fixture: ComponentFixture<AngularProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
