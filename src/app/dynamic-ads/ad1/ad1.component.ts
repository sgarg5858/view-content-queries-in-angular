import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../ad.service';

@Component({
  selector: 'app-ad1',
  templateUrl: './ad1.component.html',
  styleUrls: ['./ad1.component.scss']
})
export class Ad1Component implements OnInit,AdComponent {

  @Input() data:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
