import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css',  '../../base-template/base-template.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('#createProject').click(function(){
        alert("New project created.");
      });

      $(function() {
        $('.selectpicker').selectpicker();
      });
    });
  }

}
