import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommentService } from '../comment.service';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit,AfterViewInit {

  constructor(public commentService:CommentService,private cd:ChangeDetectorRef) { }
  @ViewChild(CommentComponent,{static:false}) comment:CommentComponent|undefined;
  @ViewChildren(CommentComponent) comments:QueryList<CommentComponent>|undefined;
  

  ngOnInit(): void {
    this.commentService.getComments();
  }
  ngAfterViewInit(): void {
  console.log(this.comment);
  this.comments?.changes.subscribe((comments:QueryList<CommentComponent>)=>{
    this.comment=this.comments?.first;

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
