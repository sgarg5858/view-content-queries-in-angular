import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommentService } from '../comment.service';
import { CommentComponent } from '../comment/comment.component';
import { ShowImageComponent } from '../show-image/show-image.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit,AfterViewInit,AfterContentInit{

  constructor(
    public commentService:CommentService,
    private cd:ChangeDetectorRef,
    private hostElement:ElementRef<any>
    ) { }
    
  @ViewChild(CommentComponent,{static:false}) comment:CommentComponent|undefined;
  @ViewChildren(CommentComponent) comments:QueryList<CommentComponent>|undefined;
  
  // @ContentChild(ShowImageComponent) imageComponent:ShowImageComponent|undefined;

  ngOnInit(): void {
    this.commentService.getComments();
  }

  ngAfterContentInit(): void {
      // console.log(this.imageComponent)
  }

  ngAfterViewInit(): void {
    console.log(this.hostElement)
  console.log(this.comment);
  this.comments?.changes.subscribe((comments:QueryList<CommentComponent>)=>{
    this.comment=this.comments?.first;
    console.log("Emitted",comments)
    //Updating Data
    if(this.comment)
    {
      this.comment.comment.email="Sanjay";
      //to let angular know to pickup the changes
      // else we will get the ExpressionChangedAfterItHasBeenCheckedError
      this.cd.detectChanges();
    }
  })
     
  }

}
