import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'HTML', icon: 'assets/html.webp' },
    { name: 'CSS', icon: 'assets/css3.png' },
    { name: 'Bootstrap', icon: 'assets/bootstrap-stack.png' },
    { name: 'JavaScript', icon: 'assets/javascript.png' },
    { name: 'Angular', icon: 'assets/angular.png'},
    { name: 'TypeScript', icon: 'assets/Typescript.png' },
    { name: 'Github', icon: 'assets/github.jpeg' },
    { name: 'VS Code', icon: 'assets/vs code.jpg' },
    { name: 'git', icon: 'assets/git.png' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
