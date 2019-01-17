import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/projects/project';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/projects/project.service';
import { Contact } from 'src/app/classes/client/contact';

@Component({
  selector: 'app-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.css', '../../client-template/client-template.component.css']
})
export class ClientProjectsComponent implements OnInit {

  projects: Project[] = [];
  constructor(private authenticationService: AuthService, private projService: ProjectService) { }

  ngOnInit() {
    this.projService.getProjects().subscribe(res =>{
      res.forEach(val =>{
        var tmp = this.authenticationService.currentUserValue as Contact;
        if (val.clientId == tmp.clientId)
          this.projects.push(val);
      });
    }

    );
  }

}
