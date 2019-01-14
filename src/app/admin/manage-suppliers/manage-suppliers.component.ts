import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Supplier } from 'src/app/classes/supplier';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-manage-suppliers',
  templateUrl: './manage-suppliers.component.html',
  styleUrls: ['./manage-suppliers.component.css', '../../admin-template/admin-template.component.css']
})
export class ManageSuppliersComponent implements OnInit {

  supplier: Supplier;
  supplierForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SupplierService
  ) { }

  // Will finish adding this in the morning
  ngOnInit() {
    this.supplierForm = this.formBuilder.group({
      businessName: ['', Validators.required]
    });
  }

}
