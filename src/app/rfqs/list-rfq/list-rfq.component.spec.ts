import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRfqComponent } from './list-rfq.component';

describe('ListRfqComponent', () => {
  let component: ListRfqComponent;
  let fixture: ComponentFixture<ListRfqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRfqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
