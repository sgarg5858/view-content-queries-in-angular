import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Comment{
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
  
  private commentsBehaviorSubject = new BehaviorSubject<Comment[]|null>(null);
  public comments$ = this.commentsBehaviorSubject.asObservable();

  public getComments()
  {
    this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
    .subscribe((comments)=>{
      this.commentsBehaviorSubject.next(comments)
    },(error)=>{
      this.commentsBehaviorSubject.next([]);
    })
  }

}
