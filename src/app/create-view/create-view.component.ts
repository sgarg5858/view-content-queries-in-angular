import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class CreateViewComponent implements OnInit,AfterViewInit {

  @ViewChild('template') template:TemplateRef<any>|undefined;
  @ViewChild('container',{read:ViewContainerRef}) container:ViewContainerRef|undefined;

  constructor(private changeDetector:ChangeDetectorRef,private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
     this.approach1();
     this.approach2();
     this.changeDetector.detectChanges();
  }
  approach1()
  {
    if(this.container && this.template)
    {
      const view = this.template.createEmbeddedView({heading:"Comments"});
      this.container.insert(view);
    }
  }
  approach2()
  {
    if(this.container && this.template)
    {
      const view:ViewRef = this.container.createEmbeddedView(this.template,{heading:"comments"});
      // this.container.createComponent(CommentsComponent);
    }
  }

}
