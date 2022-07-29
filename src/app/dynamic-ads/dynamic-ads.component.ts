import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';

@Component({
  selector: 'app-dynamic-ads',
  templateUrl: './dynamic-ads.component.html',
  styleUrls: ['./dynamic-ads.component.scss']
})
export class DynamicAdsComponent implements OnInit {

  constructor(public adService:AdService) { }

  ngOnInit(): void {
    this.adService.getAds();
  }

}
