import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClientsGeneralComponent } from './manage-clients-general.component';

describe('ManageClientsGeneralComponent', () => {
  let component: ManageClientsGeneralComponent;
  let fixture: ComponentFixture<ManageClientsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClientsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClientsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
