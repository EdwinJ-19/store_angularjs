import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomHoverBtn]',
  standalone: true
})
export class CustomHoverBtnDirective {


  constructor(private el: ElementRef) 
  { 
    console.log(el);
    
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = '#333'
    this.el.nativeElement.style.color = 'white'
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'white'
    this.el.nativeElement.style.color = '#333'
  }

}
