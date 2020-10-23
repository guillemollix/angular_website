import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyProjectsBannerComponent } from './my-projects-banner/my-projects-banner.component';
import { MyProjectsProjectListComponent } from './my-projects-project-list/my-projects-project-list.component';
import { MyProjectsProjectComponent } from './my-projects-project/my-projects-project.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [MyProjectsComponent, MyProjectsBannerComponent, MyProjectsProjectListComponent, MyProjectsProjectComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MyProjectsModule { }
