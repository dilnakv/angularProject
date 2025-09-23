import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]',
  standalone: false
})
export class HoverEffect {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.1)');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#f0f8ff');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 4px 12px rgba(0,0,0,0.2)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
    this.renderer.removeStyle(this.el.nativeElement, 'boxShadow');
  }

}
