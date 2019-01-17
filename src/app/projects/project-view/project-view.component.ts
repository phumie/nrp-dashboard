import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';
import { Project } from 'src/app/classes/projects/project';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css', '../../base-template/base-template.component.css']
})
export class ProjectViewComponent implements OnInit {

  project: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.currentProject.subscribe(project => this.project = project);
  }

}
