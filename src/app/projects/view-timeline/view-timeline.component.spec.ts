import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimelineComponent } from './view-timeline.component';

describe('ViewTimelineComponent', () => {
  let component: ViewTimelineComponent;
  let fixture: ComponentFixture<ViewTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
