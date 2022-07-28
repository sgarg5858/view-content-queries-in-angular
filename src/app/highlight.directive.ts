import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{


  @HostListener('mouseover')
  mouseover()
  {
    this.renderer.addClass(this.elementRef.nativeElement,'highlight')
  }
  @HostListener('mouseleave')
  mouseleave()
  {
    this.renderer.removeClass(this.elementRef.nativeElement,'highlight')
  }

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
      console.log(this.elementRef.nativeElement);
  }

}
