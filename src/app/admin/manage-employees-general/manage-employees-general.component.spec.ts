import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeesGeneralComponent } from './manage-employees-general.component';

describe('ManageEmployeesGeneralComponent', () => {
  let component: ManageEmployeesGeneralComponent;
  let fixture: ComponentFixture<ManageEmployeesGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmployeesGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
