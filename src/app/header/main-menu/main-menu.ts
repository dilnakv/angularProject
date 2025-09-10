import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  standalone: false,
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css'
})
export class MainMenu {
  mainMenuItems: string[] = ['Home', 'Products', 'Sale', 'New Arrival', 'Contact']

}
