import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/projects/project.service';
import { Project } from 'src/app/classes/projects/project';
import { Contact } from 'src/app/classes/client/contact';
import { ProjectContent } from 'src/app/classes/projects/projectContent';
import { Timeline } from 'src/app/classes/projects/timeline';

@Component({
  selector: 'app-client-feedback',
  templateUrl: './client-feedback.component.html',
  styleUrls: ['./client-feedback.component.css', '../../client-template/client-template.component.css']
})
export class ClientFeedbackComponent implements OnInit {
  projects: Project[] = [];
  feedbacks: ProjectContent[] = [];
  selectedFeed: ProjectContent;
  timelines: Timeline[] = [];
  constructor(private authenticationService: AuthService, private projService: ProjectService) { }

  ngOnInit() {
    this.projService.getProjectContent().subscribe(res=>{
      var tmp = this.authenticationService.currentUserValue as Contact;
      res.forEach(val => {
        if (val.clientContactInfoId == tmp.clientContactInfoId)
          this.feedbacks.push(val);
          
      });
      
      this.projService.getTimelines().subscribe(res=>{
        this.feedbacks.forEach(val=>{
          res.forEach(vall=>{
            if (vall.timelineId == val.timelineId)
              val.timeline = vall;
              this.projService.getProject(vall.projectId).subscribe(obj=>{
                vall.project = obj;
              })
          });
        });
      });
    });
    
    
  }
  getData(id)
  {
    this.feedbacks.forEach(val =>{
      if (val.projectContentId == id)
        this.selectedFeed = val;
    })
  }
}
