import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../ad.service';

@Component({
  selector: 'app-ad2',
  templateUrl: './ad2.component.html',
  styleUrls: ['./ad2.component.scss']
})
export class Ad2Component implements OnInit,AdComponent {

  @Input() data: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
