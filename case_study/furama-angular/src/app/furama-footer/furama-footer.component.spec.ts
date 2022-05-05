import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaFooterComponent } from './furama-footer.component';

describe('FuramaFooterComponent', () => {
  let component: FuramaFooterComponent;
  let fixture: ComponentFixture<FuramaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
