import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ViewTimelineComponent } from './view-timeline/view-timeline.component';
import { SnagsComponent } from './view-timeline/snags/snags.component';
import { GalleryComponent } from './view-timeline/gallery/gallery.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectViewComponent,
    NewProjectComponent,
    ViewTimelineComponent,
    SnagsComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ProjectsRoutingModule
  ],
  exports: []
})
export class ProjectsModule { }
