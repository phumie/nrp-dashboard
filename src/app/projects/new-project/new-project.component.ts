import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/projects/project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/projects/project.service';
import { GeneralService } from 'src/app/services/clients/general.service';
import { Client } from 'src/app/classes/client/client';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css',  '../../base-template/base-template.component.css']
})
export class NewProjectComponent implements OnInit {

  submitted = false;
  clients: Client[];
  projectForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: GeneralService,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      clientId: ['', Validators.required],
      facility: ['', Validators.required],
      description: ['', Validators.required],
      creationDate: ['', Validators.required]
    });
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  get form() {
    return this.projectForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.projectForm.invalid) {
      return;
    }

    const project: Project = {
      title: this.form.projectName.value,
      facility: this.form.facility.value,
      description: this.form.description.value,
      date: this.form.creationDate.value,
      clientId: this.form.clientId.value
    };
    this.projectService.addProject(project)
      .subscribe(data => console.log(data));
  }

}
