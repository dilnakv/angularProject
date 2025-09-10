import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {
  employees = [
    { id: 101, name: 'Dilna', email: 'dilna@gmail.com'},
    { id: 102, name: 'Krishna', email: 'krishna@gmail.com'},
    { id: 103, name: 'Ravi', email: 'ravi@gmail.com'},
    { id: 104, name: 'Anu', email: 'anu@gmail.com'},
    { id: 105, name: 'Kiran', email: 'kiran@gmail.com'}
  ];
}
