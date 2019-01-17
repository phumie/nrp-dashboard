import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/projects/project';
import { Timeline } from 'src/app/classes/projects/timeline';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/projects/project.service';
import { Contact } from 'src/app/classes/client/contact';
import { ProjectContent } from 'src/app/classes/projects/projectContent';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.css', '../../client-template/client-template.component.css']
})
export class NewFeedbackComponent implements OnInit {
  projects: Project[] = [];
  timelines: Timeline[] = [];
  timeofProject: Timeline[] = [];
  selectedProject = 0;
  selectedTimline = 0;
  id = 0;
  content = new ProjectContent();
  title = "";
  constructor(private authenticationService: AuthService, private projService: ProjectService) {
    
    this.content.description = "";
   }

  ngOnInit() {
    var tmp = this.authenticationService.currentUserValue as Contact;
    this.content.clientContactInfoId = tmp.clientContactInfoId;
    this.projService.getTimelines().subscribe(res=>{
      res.forEach(val=>this.timelines.push(val));
    });
    this.projService.getProjects().subscribe(res=>{
      var tmp  = this.authenticationService.currentUserValue as Contact;
      res.forEach(val=>{
        if (val.clientId == tmp.clientId)
          this.projects.push(val);
        });
    });
  }
  projectChange(id: number)
  {
   
    this.timeofProject = [];
    this.selectedProject = id;
    this.timelines.forEach(val=>{
      if (val.projectId == id)
        this.timeofProject.push(val);
    });
  }
  timelineChange(id: number)
  {
    this.content.timelineId = id;
  }
  onSubmit()
  {
    this.title = (document.getElementById('title') as HTMLInputElement).value;
    this.content.description = (document.getElementById('msg') as HTMLTextAreaElement).value;

   
    this.content.description = this.title + "-" + this.content.description;
  
    this.projService.newFeedBack(this.content).subscribe(res=>{
      console.log(res);
      alert("Success");
    });
  }
}
