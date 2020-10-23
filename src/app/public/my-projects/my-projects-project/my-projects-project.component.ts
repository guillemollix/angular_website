import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-projects-project',
  templateUrl: './my-projects-project.component.html',
  styles: [
  ]
})
export class MyProjectsProjectComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() tags: string[];
  @Input() link: string;
  @Input() readme: string;
  constructor() { }

  ngOnInit(): void {
  }

}
