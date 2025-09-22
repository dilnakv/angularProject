import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project implements  OnInit, OnChanges {
   @Input() project: string = '';

  projectHistory: string[] = [];

  ngOnInit(): void {
    // Add initial project to history
    if (this.project) {
      this.projectHistory.push(this.project);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project'] && !changes['project'].firstChange) {
      // Push newly assigned project to history
      this.projectHistory.push(this.project);
    }
  }
}
