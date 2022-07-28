import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[addAttribute]'
})
export class AddAttributeDirective implements OnChanges{

  @Input() addAttribute:{name:string,value:string}={name:'',value:''};
  constructor(private elementRef:ElementRef,private renderer:Renderer2) {
    console.log(elementRef,this.elementRef);
   }
   ngOnChanges(changes: SimpleChanges): void {
       if(this.addAttribute.name != '')
       {
        // this.elementRef.nativeElement.setAttribute(this.addAttribute.name,this.addAttribute.value)
        this.renderer.setAttribute(this.elementRef.nativeElement,this.addAttribute.name,this.addAttribute.value);
       }
   }

}
