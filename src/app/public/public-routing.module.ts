import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {MyProjectsComponent} from './my-projects/my-projects/my-projects.component';

const routes: Routes = [{ path: 'home', component: HomeComponent }, { path: 'my-projects', component: MyProjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
