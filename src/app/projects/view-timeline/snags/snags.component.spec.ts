import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnagsComponent } from './snags.component';

describe('SnagsComponent', () => {
  let component: SnagsComponent;
  let fixture: ComponentFixture<SnagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
