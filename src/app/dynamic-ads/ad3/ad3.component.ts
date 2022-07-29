import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../ad.service';

@Component({
  selector: 'app-ad3',
  templateUrl: './ad3.component.html',
  styleUrls: ['./ad3.component.scss']
})
export class Ad3Component implements OnInit,AdComponent {

  @Input() data:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
