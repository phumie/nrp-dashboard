import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetReportsComponent } from './fleet-reports.component';

describe('FleetReportsComponent', () => {
  let component: FleetReportsComponent;
  let fixture: ComponentFixture<FleetReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
