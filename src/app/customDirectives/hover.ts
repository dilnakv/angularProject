import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: false
})
export class Hover {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = '#282828';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') textcolor: string = 'white';

  @HostListener('mouseenter') OnMouseEnter(){
    this.backgroundColor = 'white';
    this.textcolor = '#282828'
    this.border = '#282828 3px solid'
  }

  @HostListener('mouseleave') OnMouseLeave(){
    this.backgroundColor = '#282828';
    this.textcolor = 'white'
    this.border = 'none'
  }
}
