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
    var options = false;

    $("#timeline-div").show();
    $("#resources-div").hide();
    $("#quotes-div").hide();
    $("#menu").hide();
    
    $(document).ready(function(){
      $("#timeline").click(function(){
        $("#timeline-div").show();
        $("#resources-div").hide();
        $("#quotes-div").hide();
        $("#menu").hide();
        options = false;
      });

      $("#resources").click(function(){
        $("#resources-div").show();
        $("#timeline-div").hide();
        $("#quotes-div").hide();
        $("#menu").hide();
        options = false;
      });

      $("#quotes").click(function(){
        $("#quotes-div").show();
        $("#resources-div").hide();
        $("#timeline-div").hide();
        $("#menu").hide();
        options = false;
      });

      $("#options").click(function(){
        if (options == false){
          $("#menu").show();
          options = true;
        }  
        else if (options == true){
          $("#menu").hide();
          options = false;
        }  
      });
    });
    this.projectService.currentProject.subscribe(project => this.project = project);
  }

}
