import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/classes/client/client';
import { Project } from 'src/app/classes/projects/project';
import { GeneralService } from 'src/app/services/clients/general.service';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css', '../../base-template/base-template.component.css']
})
export class ProjectListComponent implements OnInit {

  clients: Client[];
  projects: Project[];

  constructor(
    private clientService: GeneralService,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
  }

  getClients() {
  }

}
