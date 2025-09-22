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

  // Assign new project when button is clicked
  changeProject() {
    const projects = ['Project A', 'Project B', 'Project C', 'Project D'];
    const random = projects[Math.floor(Math.random() * projects.length)];
    this.employee = {
      ...this.employee,
      project: random
    };
  }
}
