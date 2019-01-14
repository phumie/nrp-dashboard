import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeesAccountComponent } from './manage-employees-account.component';

describe('ManageEmployeesAccountComponent', () => {
  let component: ManageEmployeesAccountComponent;
  let fixture: ComponentFixture<ManageEmployeesAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmployeesAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeesAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
