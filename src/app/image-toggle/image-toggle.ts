import { Component } from '@angular/core';

@Component({
  selector: 'app-image-toggle',
  standalone: false,
  templateUrl: './image-toggle.html',
  styleUrl: './image-toggle.css'
})
export class ImageToggle {
  isImageVisible = true;
  imagePath1 = '/assets/image/leaf.jpeg';

imagePath2 = '/assets/image/garden.jpeg';
  toggleImage() {
    this.isImageVisible = !this.isImageVisible;
  }
}
