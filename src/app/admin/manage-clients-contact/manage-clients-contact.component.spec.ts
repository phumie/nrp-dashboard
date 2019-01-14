import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClientsContactComponent } from './manage-clients-contact.component';

describe('ManageClientsContactComponent', () => {
  let component: ManageClientsContactComponent;
  let fixture: ComponentFixture<ManageClientsContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClientsContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClientsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
