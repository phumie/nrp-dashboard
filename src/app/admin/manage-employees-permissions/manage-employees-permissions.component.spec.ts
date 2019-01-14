import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeesPermissionsComponent } from './manage-employees-permissions.component';

describe('ManageEmployeesPermissionsComponent', () => {
  let component: ManageEmployeesPermissionsComponent;
  let fixture: ComponentFixture<ManageEmployeesPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmployeesPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeesPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
