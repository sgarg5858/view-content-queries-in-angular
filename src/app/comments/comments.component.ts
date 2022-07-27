import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit,AfterViewInit {

  constructor(public commentService:CommentService,private cd:ChangeDetectorRef) { }
  

  ngOnInit(): void {
    this.commentService.getComments();
  }
  ngAfterViewInit(): void {

     
  }

}
