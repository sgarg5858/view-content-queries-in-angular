import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdComponent, AdItem } from '../ad.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit,OnDestroy,AfterViewInit {

  @Input() ads:AdItem[]=[];
  @ViewChild(AdDirective)adDirective:AdDirective|undefined;
  currentAdIndex:number=-1;
  interval:any;
  constructor(private changeDetector:ChangeDetectorRef) { }

  ngOnDestroy(): void {
      clearInterval(this.interval)
  }
  ngOnInit()
  {

  }
  ngAfterViewInit(): void {
      this.loadComponent();
      this.moveAds();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex+1) % this.ads.length;
    const ad = this.ads[this.currentAdIndex];

    
    if(this.adDirective)
    {
      const viewContainerRef=this.adDirective.viewContainerRef;
      viewContainerRef.clear();
      const component = viewContainerRef.createComponent<AdComponent>(ad.component);
      component.instance.data=ad.data;
      this.changeDetector.detectChanges();
    }
  }
  moveAds()
  {
    this.interval = setInterval(()=>{
      this.loadComponent();
    },3000)
  }




}
