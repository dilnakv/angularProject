import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {
  @Input() employeeList: any[] = [];
}
