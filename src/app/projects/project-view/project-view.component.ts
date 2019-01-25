import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';
import { Project } from 'src/app/classes/projects/project';
import * as $ from 'jquery';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css', '../../base-template/base-template.component.css']
})
export class ProjectViewComponent implements OnInit {

  project: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    $("#timeline-div").show();
    $("#resources-div").hide();
    $("#quotes-div").hide();
    
    $(document).ready(function(){
      $("#timeline").click(function(){
        $("#timeline-div").show();
        $("#resources-div").hide();
        $("#quotes-div").hide();
      });

      $("#resources").click(function(){
        $("#resources-div").show();
        $("#timeline-div").hide();
        $("#quotes-div").hide();
      });

      $("#quotes").click(function(){
        $("#quotes-div").show();
        $("#resources-div").hide();
        $("#timeline-div").hide();
      });
    });
    this.projectService.currentProject.subscribe(project => this.project = project);
  }

}
