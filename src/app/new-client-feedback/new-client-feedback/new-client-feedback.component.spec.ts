import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientFeedbackComponent } from './new-client-feedback.component';

describe('NewClientFeedbackComponent', () => {
  let component: NewClientFeedbackComponent;
  let fixture: ComponentFixture<NewClientFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClientFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
