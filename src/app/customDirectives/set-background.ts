import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackground]',
  standalone: false
})
export class SetBackground implements OnInit {
  // private element: ElementRef;
  // @Input('appSetBackground') backColor: string = '#36454F';
  // @Input() textColor: string = 'white';
  @Input('appSetBackground') changeTextAndBackColor:{backColor: string, textColor: string};

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    // this.element = element
  }

  ngOnInit(){
    // this.element.nativeElement.style.backgroundColor = '#36454F'
    // this.element.nativeElement.style.color = 'color'

    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor);
    // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example title !')
  }
}
