import { Component } from '@angular/core';

@Component({
  selector: 'app-image-toggle',
  standalone: false,
  templateUrl: './image-toggle.html',
  styleUrl: './image-toggle.css'
})
export class ImageToggle {
  isImageVisible = true;
  imagePath = '/assets/image/leaf.jpeg';

  toggleImage() {
    this.isImageVisible = !this.isImageVisible;
  }
}
