import { NgModule, Renderer2, RendererFactory2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowImageComponent } from './show-image/show-image.component';
import { CreateViewComponent } from './create-view/create-view.component';
import { HighlightDirective } from './highlight.directive';
import { PresentationRenderingSplitComponent } from './presentation-rendering-split/presentation-rendering-split.component';
import { AddAttributeDirective } from './presentation-rendering-split/add-attribute.directive'
import { CustomRendererService } from './custom-renderer.service';
import { DynamicAdsComponent } from './dynamic-ads/dynamic-ads.component';
import { Ad1Component } from './dynamic-ads/ad1/ad1.component';
import { Ad2Component } from './dynamic-ads/ad2/ad2.component';
import { Ad3Component } from './dynamic-ads/ad3/ad3.component';
import { AdDirective } from './dynamic-ads/ad.directive';
import { AdsComponent } from './dynamic-ads/ads/ads.component';
@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentComponent,
    ShowImageComponent,
    CreateViewComponent,
    HighlightDirective,
    PresentationRenderingSplitComponent,
    AddAttributeDirective,
    DynamicAdsComponent,
    Ad1Component,
    Ad2Component,
    Ad3Component,
    AdDirective,
    AdsComponent
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
