import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-employee-viewchildren',
  standalone: false,
  templateUrl: './employee-viewchildren.html',
  styleUrl: './employee-viewchildren.css'
})
export class EmployeeViewchildren {
  employees = [
    { id: 1, name: 'John Doe', department: 'HR', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', department: 'IT', email: 'jane.smith@example.com' },
    { id: 3, name: 'Michael Johnson', department: 'Finance', email: 'michael.j@example.com' },
    { id: 4, name: 'Emily Davis', department: 'Marketing', email: 'emily.davis@example.com' },
    { id: 5, name: 'Johnny Appleseed', department: 'Sales', email: 'johnny.a@example.com' }
  ];

  // Grab both input and all employee cards
  @ViewChildren('employeeCard, searchInput') elements!: QueryList<ElementRef>;

  searchEmployee() {
    const allElements = this.elements.toArray();

    // first element is input
    const inputEl = allElements[0].nativeElement as HTMLInputElement;
    const searchValue = inputEl.value.trim().toLowerCase();

    // remaining are employee cards
    const employeeCards = allElements.slice(1);

    employeeCards.forEach((card, idx) => {
      const emp = this.employees[idx];
      if (searchValue && emp.name.toLowerCase().includes(searchValue)) {
        card.nativeElement.classList.add('highlight');
      } else {
        card.nativeElement.classList.remove('highlight');
      }
    });
  }
}
