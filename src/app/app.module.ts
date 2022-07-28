import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowImageComponent } from './show-image/show-image.component';
import { CreateViewComponent } from './create-view/create-view.component';
import { HighlightDirective } from './highlight.directive'
@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentComponent,
    ShowImageComponent,
    CreateViewComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
