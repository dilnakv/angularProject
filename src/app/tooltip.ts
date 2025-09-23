import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: false
})
export class Tooltip {
  @Input('appTooltip') tooltipText: string = '';
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    this.tooltipElement = this.renderer.createElement('span');
    this.tooltipElement.innerText = this.tooltipText;
    this.renderer.addClass(this.tooltipElement, 'tooltip');
     this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
