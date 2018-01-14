import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../services/properties.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  items : Array<any>;
  error : string;
  showForm = false;
  sortFields: Array<string> = [
    "address",
    "area",
    "bathrooms",
    "bedrooms",
    "price",
    "types"
  ];
  constructor(private propertiesService: PropertiesService) { }
  
  ngOnInit() {
    this.propertiesService.getAllItems()
    .subscribe(
      data => this.items = data,
      error => this.error = error.statusText
    )

    this.propertiesService.newPropertySubject.subscribe ( //subscribe to the data received after submission of form
        data => this.items = [data, ...this.items] //... spread method which takes all the existing items from thr array and pushes them to fit new item in the beginning
    )

   
  }
  add(){
    this.showForm = !this.showForm;
  }

}
