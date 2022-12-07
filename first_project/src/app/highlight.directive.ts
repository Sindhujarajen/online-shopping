import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef) { }
  @HostListener('mouseover') over(){
    this.element.nativeElement.style.color='darkviolet'
    // this.element.nativeElement.style['font-size']='medium'
    this.element.nativeElement.style['font-weight']='bold'
  }
  @HostListener('mouseleave') leave(){
    this.element.nativeElement.style.color=''
    this.element.nativeElement.style['font-weight']=''
}
}