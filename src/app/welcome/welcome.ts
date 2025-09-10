import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {
  isLoggedIn = true;   // change this to false to test
  userName = 'Dilna';
}
