import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  users = [
    { id: 1, name: 'Dilna', email: 'dilna@gmail.com', status: 'active' },
    { id: 2, name: 'Krishna', email: 'krishna@gmail.com', status: 'inactive' },
    { id: 3, name: 'Ravi', email: 'ravi@gmail.com', status: 'pending' },
    { id: 4, name: 'Anu', email: 'anu@gmail.com', status: 'blocked' },
    { id: 5, name: 'Kiran', email: 'kiran@gmail.com', status: 'active' }
  ];
}
