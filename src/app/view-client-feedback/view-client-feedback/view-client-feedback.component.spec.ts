import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientFeedbackComponent } from './view-client-feedback.component';

describe('ViewClientFeedbackComponent', () => {
  let component: ViewClientFeedbackComponent;
  let fixture: ComponentFixture<ViewClientFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClientFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
