import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  standalone: false,
  templateUrl: './employee-search.html',
  styleUrl: './employee-search.css'
})
export class EmployeeSearch {
   employees = [
    { id: 1, name: 'John Doe', department: 'HR', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', department: 'IT', email: 'jane.smith@example.com' },
    { id: 3, name: 'Michael Johnson', department: 'Finance', email: 'michael.j@example.com' },
    { id: 4, name: 'Emily Davis', department: 'Marketing', email: 'emily.davis@example.com' }
  ];
// For capturing the search input
@ViewChild('searchInput') searchInput!: ElementRef;

// Search result
searchedEmployee: any = null;
notFound = false;

searchEmployee() {
  const value = this.searchInput.nativeElement.value.trim().toLowerCase();
  this.searchedEmployee = this.employees.find(emp =>
    emp.name.toLowerCase().includes(value)
  );

  this.notFound = !this.searchedEmployee;
}
}
