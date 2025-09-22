import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  standalone: false,
  templateUrl: './employee-profile.html',
  styleUrl: './employee-profile.css'
})
export class EmployeeProfile {
  employee = {
    name: 'John Doe',
    role: 'Software Engineer',
    project: 'Project A'
  };

  newProject: string = '';
  message: string = '';

  // changeProject() {
  //   const projects = ['Project A', 'Project B', 'Project C', 'Project D'];
  //   const random = projects[Math.floor(Math.random() * projects.length)];
  //   this.employee = {
  //     ...this.employee,
  //     project: random
  //   };
  // }

  changeProject() {
    if (!this.newProject.trim()) {
      this.message = 'Please enter a project name';
      return;
    }

    if (this.newProject === this.employee.project) {
      this.message = `Project "${this.newProject}" is already assigned`;
    } else {
      this.employee = {
        ...this.employee,
        project: this.newProject
      };
      this.message = `New project "${this.newProject}" assigned successfully`;
    }

    // clear textbox
    this.newProject = '';
  }
}
