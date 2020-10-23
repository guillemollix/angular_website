import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-projects-project-list',
  templateUrl: './my-projects-project-list.component.html',
  styles: [
  ]
})
export class MyProjectsProjectListComponent implements OnInit {

  projects: Project[];
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/projects.json').subscribe(data => {
      this.projects = (data as any).projects;
    });
  }


}

interface Project {
  name: string;
  description: string;
  tags: string[];
  link: string;
  readme: string;
}
