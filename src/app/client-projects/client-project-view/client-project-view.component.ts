import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/projects/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Timeline } from 'src/app/classes/projects/timeline';

@Component({
  selector: 'app-client-project-view',
  templateUrl: './client-project-view.component.html',
  styleUrls: ['./client-project-view.component.css', '../../client-template/client-template.component.css']
})
export class ClientProjectViewComponent implements OnInit {
id = 0;
timelines: Timeline[] = [];
  constructor(private authenticationService: AuthService, private projService: ProjectService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

   }

  ngOnInit() {
    this.projService.getTimelines().subscribe(res =>{
      console.log(res);
      res.forEach(val=>{
        if(val.projectId == this.id)
          this.timelines.push(val);
      })
    });
  }

}
