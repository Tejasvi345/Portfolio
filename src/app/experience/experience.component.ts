import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  workExpList: Experience[] = [
    {
      role: 'System Engineer',
      company: 'Infosys',
      duration: 'March 2022 - June 2024',
      description: [
        'Worked for various projects.',
        'Worked with a variety of technologies, including Angular,Javascript, Typescript, Node JS, CSS, Responsive Web Design and others..',
      ],
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
