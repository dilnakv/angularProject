import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  standalone: false,
  templateUrl: './employee-profile.html',
  styleUrl: './employee-profile.css'
})
export class EmployeeProfile implements DoCheck{
  employee = {
    name: 'John Doe',
    role: 'Software Engineer',
    project: 'Project A'
  };

  newProject: string = '';
  message: string = '';
  lastProject: string = this.employee.project;
  isFirstLoad: boolean = true;

  // changeProject() {
  //   const projects = ['Project A', 'Project B', 'Project C', 'Project D'];
  //   const random = projects[Math.floor(Math.random() * projects.length)];
  //   this.employee = {
  //     ...this.employee,
  //     project: random
  //   };
  // }

  changeProject() {
    if (!this.newProject.trim()) return;

    this.employee = {
      ...this.employee,
      project: this.newProject
    };

    this.newProject = '';
    this.isFirstLoad = false; 
  }

  ngDoCheck(): void {
    if (this.isFirstLoad) return; 
    
    if (this.employee.project === this.lastProject) {
      this.message = `Project "${this.employee.project}" is already assigned`;
    } else {
      this.message = `New project "${this.employee.project}" assigned successfully`;
      this.lastProject = this.employee.project;
    }
  }
}
