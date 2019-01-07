import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientProjectComponent } from './view-client-project.component';

describe('ViewClientProjectComponent', () => {
  let component: ViewClientProjectComponent;
  let fixture: ComponentFixture<ViewClientProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClientProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
