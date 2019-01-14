import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteReportsComponent } from './site-reports.component';

describe('SiteReportsComponent', () => {
  let component: SiteReportsComponent;
  let fixture: ComponentFixture<SiteReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
