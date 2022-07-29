import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of } from 'rxjs';
import { Ad1Component } from './ad1/ad1.component';
import { Ad2Component } from './ad2/ad2.component';
import { Ad3Component } from './ad3/ad3.component';
//to make ad components uniform
export interface AdComponent{
  data:string;
} 
//to create ads array
export class AdItem{
  constructor(public component:any,public data:string){}
}
@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  private adsBehaviorSubject = new BehaviorSubject<AdItem[]|null>(null);
  ads$=this.adsBehaviorSubject.asObservable();

  getAds()
  {
    let ads:AdItem[]=
     [
       new AdItem(Ad1Component,"Frontend Engineers Required"),
       new AdItem(Ad2Component,"Backend Engineers Required"),
       new AdItem(Ad3Component,"Devops Engineers Required"),
      ]
      of(ads).pipe(delay(500)).subscribe((ads)=>{
        this.adsBehaviorSubject.next(ads)
      },(error)=>{
        this.adsBehaviorSubject.next([]);
      })
  }
}
