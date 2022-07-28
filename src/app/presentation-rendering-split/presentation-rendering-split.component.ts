import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-rendering-split',
  templateUrl: './presentation-rendering-split.component.html',
  styleUrls: ['./presentation-rendering-split.component.scss']
})
export class PresentationRenderingSplitComponent implements OnInit {

  constructor() { }
  attribute={name:'',value:''};

  ngOnInit(): void {
  }
  addAttribute()
  {
    this.attribute={name:'data-name',value:'Sanjay'};
  }

}
