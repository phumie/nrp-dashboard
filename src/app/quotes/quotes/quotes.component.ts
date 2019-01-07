import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css',  '../../base-template/base-template.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var quantity;
    var description;
    var rate;
    var total;

    $(document).ready(function(){
      $('#creatQuote').click(function(){
        alert("New quote created.");
      });
    });
  }

}
