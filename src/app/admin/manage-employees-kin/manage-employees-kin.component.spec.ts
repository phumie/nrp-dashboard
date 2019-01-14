import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeesKinComponent } from './manage-employees-kin.component';

describe('ManageEmployeesKinComponent', () => {
  let component: ManageEmployeesKinComponent;
  let fixture: ComponentFixture<ManageEmployeesKinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmployeesKinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeesKinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
