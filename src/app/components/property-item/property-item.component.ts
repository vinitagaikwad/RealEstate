import { Component, OnInit, Input } from '@angular/core';
import { PropertyInterface } from '../../property-interface';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.css']
})
export class PropertyItemComponent implements OnInit {
  @Input () item:PropertyInterface; 
  constructor() { }

  ngOnInit() {
    let bedrooms = this.item.bedrooms;
    
  }

}
