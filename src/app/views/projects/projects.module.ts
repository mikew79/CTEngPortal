import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    ProjectsRoutingModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    NgbModule,
    CommonModule
  ],
  declarations: [ ProjectsComponent, ProjectListComponent, ProjectListItemComponent ]
})
export class ProjectsModule { }
