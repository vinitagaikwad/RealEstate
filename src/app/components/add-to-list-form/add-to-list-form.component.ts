import { Component, OnInit, ViewChild } from '@angular/core';
import { PropertiesService } from '../../services/properties.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'add-to-list-form',
  templateUrl: './add-to-list-form.component.html',
  styleUrls: ['./add-to-list-form.component.css']
})
export class AddToListFormComponent implements OnInit {
  @ViewChild('newPropertyForm') newPropertyForm; //call this to get a hold of our form to reset the values on submit
  property:string;

  constructor(private propertiesService:PropertiesService, private route : Router) { 
    //this.property = route.snapshot.params['value'];
  }
  propertyTypes : Array<string> = ["Duplex", "Apartment"];
  ngOnInit() {
  }
  onSubmit(data) : void {
    this.propertiesService.addItems(data);
    //this.route.navigate(['/list',this.property]);
    this.newPropertyForm.reset();
   
  }
 
}
