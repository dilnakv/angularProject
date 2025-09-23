import { Component } from '@angular/core';

@Component({
  selector: 'app-user-role',
  standalone: false,
  templateUrl: './user-role.html',
  styleUrl: './user-role.css'
})
export class UserRole {
  userRole: string = 'employee';
}
