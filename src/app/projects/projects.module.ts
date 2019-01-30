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
import { ClientFeedbackComponent } from './view-timeline/client-feedback/client-feedback.component';
import { NewUpdateComponent } from './view-timeline/new-update/new-update.component';
import { MenuSelectionComponent } from './project-view/menu-selection/menu-selection.component';
import { PhaseDurationProgressComponent } from './project-view/phase-duration-progress/phase-duration-progress.component';
import { TimelinesComponent } from './project-view/timelines/timelines.component';
import { ResourcesComponent } from './project-view/resources/resources.component';
import { QuotesComponent } from './project-view/quotes/quotes.component';
import { FeedbackListComponent } from './view-timeline/feedback-list/feedback-list.component';
import { SnagsListComponent } from './view-timeline/snags-list/snags-list.component';
import { DateDetailsComponent } from './view-timeline/date-details/date-details.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { AddTimelineComponent } from './project-view/timelines/add-timeline/add-timeline.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectViewComponent,
    NewProjectComponent,
    ViewTimelineComponent,
    SnagsComponent,
    GalleryComponent,
    ClientFeedbackComponent,
    NewUpdateComponent,
    MenuSelectionComponent,
    PhaseDurationProgressComponent,
    TimelinesComponent,
    ResourcesComponent,
    QuotesComponent,
    FeedbackListComponent,
    SnagsListComponent,
    DateDetailsComponent,
    MobileMenuComponent,
    AddTimelineComponent,
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
