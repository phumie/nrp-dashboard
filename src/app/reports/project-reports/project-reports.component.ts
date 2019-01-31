import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/classes/client/client';
import { Project } from 'src/app/classes/projects/project';
import { GeneralServiceClient } from 'src/app/services/clients/general.service';
import { ProjectService } from 'src/app/services/projects/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-reports',
  templateUrl: './project-reports.component.html',
  styleUrls: ['./project-reports.component.css', '../../base-template/base-template.component.css']
})
export class ProjectReportsComponent implements OnInit {

  clients: Client[];
  projects: Project[];
  project: Project;
  projectId: number;

  constructor(
    private clientService: GeneralServiceClient,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {}

  onSelect(id: number): void {
    this.projectId = id;
  }
}
