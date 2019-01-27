import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnagsListComponent } from './snags-list.component';

describe('SnagsListComponent', () => {
  let component: SnagsListComponent;
  let fixture: ComponentFixture<SnagsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnagsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnagsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
