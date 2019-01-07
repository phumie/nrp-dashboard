import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.css', '../../admin-template/admin-template.component.css']
})
export class ManageClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('#submit').click(function(){
        alert("Client information updated.");
      });

      $('#deleteClient').click(function(){
        alert("Client deleted.");
      });
    })
  }

}
