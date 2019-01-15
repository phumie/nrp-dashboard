import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/services/suppliers/supplier.service';
import { Supplier } from 'src/app/classes/supplier/supplier';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css', '../../admin-template/admin-template.component.css']
})
export class SupplierListComponent implements OnInit {

  suppliers: Supplier[];

  constructor(
    private router: Router,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {
    this.getClient();
  }

  getClient(): void {
    this.supplierService.getSuppliers()
      .subscribe(suppliers => this.suppliers = suppliers);
  }
}
