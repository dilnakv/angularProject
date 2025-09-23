import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})  
export class Highlight {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') OnMouseEnter(){
    console.log('mouseenter fired'); 
    this.renderer.addClass(this.element.nativeElement, 'highlight-product');
  }

  @HostListener('mouseout') OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement, 'highlight-product');
  }

}
