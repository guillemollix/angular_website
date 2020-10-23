import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styles: [
  ]
})
export class HomeFeaturesComponent implements OnInit {

  features: { title: string; description: string; icon: string; }[];
  constructor() { }

  ngOnInit(): void {
    this.features = [
          {
           title: 'Situation Actuelle',
           description: 'Étudiant en dernière année d\'école d\'ingénieur à Telecom SudParis.',
           icon: '../../../../assets/img/TSP_logo.png'
        },
        {
         title: 'Objectifs',
         description: 'Développer mes compétences de développement fullstack.',
         icon: '../../../../assets/img/full-stack-developer.png'
        },
        {
         title: 'Technologies Connues',
         description: 'Java, Python, Kotlin, C, Git, Docker, etc... Angular commence à arriver!',
         icon: '../../../../assets/img/coding.png'
        }
      ];
  }
}
