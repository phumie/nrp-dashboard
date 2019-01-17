import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Client } from 'src/app/classes/client/client';
import { Project } from 'src/app/classes/projects/project';
import { GeneralService } from 'src/app/services/clients/general.service';
import { ProjectService } from 'src/app/services/projects/project.service';
import { Contact } from 'src/app/classes/client/contact';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showLoadingIndicator = true;
  clients: Client[];
  projects: Project[];
  project: Project;
  inProgress: number = 0;
  overDue: number = 0;
  pending: number = 0;
  totalClients: number = 0;  

    constructor(private _router: Router,
      private clientService: GeneralService,
      private projectService: ProjectService,
      private router: Router) {
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
    this.getProjects();
    this.projectService.currentProject.subscribe(project => this.project = project);
    this.getClients();    
  }

  getProjects() {
    console.log("Retrieving Projects");
    this.projectService.getProjects()
      .subscribe(projects => {
        console.log(projects);
        this.inProgress = projects.length;
        this.projects = projects;
      });
  }

  getClients() {
    this.clientService.getClients()
      .subscribe(client => {
        this.clients = client;
        this.totalClients = client.length;
      });
  }

}
