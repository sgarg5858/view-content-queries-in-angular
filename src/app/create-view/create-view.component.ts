import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class CreateViewComponent implements OnInit,AfterViewInit {

  @ViewChild('template') template:TemplateRef<any>|undefined;
  @ViewChild('container',{read:ViewContainerRef}) container:ViewContainerRef|undefined;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
     this.approach1();
     this.approach2();
  }
  approach1()
  {
    if(this.container && this.template)
    {
      const view:ViewRef = this.template.createEmbeddedView({});
      this.container.insert(view);
    }
  }
  approach2()
  {
    if(this.container && this.template)
    {
      const view:ViewRef = this.container.createEmbeddedView(this.template);
    }
  }

}
