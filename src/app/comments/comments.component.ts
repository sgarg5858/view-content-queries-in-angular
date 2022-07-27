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
  

  ngOnInit(): void {
    this.commentService.getComments();
  }
  ngAfterViewInit(): void {
  console.log(this.comment);
     
  }

}
