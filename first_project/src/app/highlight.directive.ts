import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('background') background:any
  @Input('color') color:any

  constructor(private element:ElementRef) { }
  @HostListener('mouseover') over(){
    this.element.nativeElement.style.color='blue'
    this.element.nativeElement.style.color=this.color
    this.element.nativeElement.style.background=this.background
    // this.element.nativeElement.style['font-size']='medium'
    this.element.nativeElement.style['font-weight']='bold'
  }
  @HostListener('mouseleave') leave(){
    this.element.nativeElement.style.color=''
    this.element.nativeElement.style['font-weight']=''
    this.element.nativeElement.style.background=''
}
}