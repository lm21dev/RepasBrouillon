import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSurligner]'
})
export class SurlignerDirectiveDirective {
  private el: ElementRef;
  private renderer: Renderer2;
  @HostListener('mouseenter',['$event'])
  onMouseEnter(event: any): void{
    if(this.el){
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'black');
      this.renderer.setStyle(this.el.nativeElement, 'color','white');
    }
  }
  @HostListener('mouseleave',['$event'])
  onMouseLeave(event: any): void{
    if(this.el){
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
      this.renderer.setStyle(this.el.nativeElement, 'color','black');
    }
  }
  constructor(el: ElementRef, render: Renderer2) {
    this.el = el;
    this.renderer = render;
  }

}
