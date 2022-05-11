import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownAppComponent } from './countdown-app.component';

describe('CountdownAppComponent', () => {
  let component: CountdownAppComponent;
  let fixture: ComponentFixture<CountdownAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
