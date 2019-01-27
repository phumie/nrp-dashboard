import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseDurationProgressComponent } from './phase-duration-progress.component';

describe('PhaseDurationProgressComponent', () => {
  let component: PhaseDurationProgressComponent;
  let fixture: ComponentFixture<PhaseDurationProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseDurationProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseDurationProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
