import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project implements  OnInit, OnChanges, DoCheck{
   @Input() project: string = '';

  projectHistory: string[] = [];
  lastProject: string = '';

  ngOnInit(): void {
    // Add initial project to history
    if (this.project) {
      this.projectHistory.push(this.project);
      this.lastProject = this.project;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['project'] && !changes['project'].firstChange) {
    //   // Push newly assigned project to history
    //   this.projectHistory.push(changes['project'].currentValue);
    // }
  }

  ngDoCheck(): void {
    // Check if project has changed (manual check instead of ngOnChanges)
    if (this.project && this.project !== this.lastProject) {
      this.projectHistory.push(this.project);
      this.lastProject = this.project;
    }
  }
}
