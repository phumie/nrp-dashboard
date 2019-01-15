import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showLoadingIndicator = true;

    constructor(private _router: Router) {
      this._router.events.subscribe((routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart) {
          this.showLoadingIndicator = true;
        }
        if (routerEvent instanceof NavigationEnd) {
          this.showLoadingIndicator = false;
        }
      });
    }

  ngOnInit() {
  }

}
