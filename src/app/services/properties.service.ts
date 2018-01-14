import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/map';
@Injectable()
export class PropertiesService {
  items : Array<any>;
  public newPropertySubject = new Subject<any>();
  constructor(private http:Http) { }
 getAllItems() {
   return this.http.get('data/properties.json')
   .map(res => res.json())
   
 }
 addItems(data){ //data which we will get after submission of form
    data.image = 'default';
    this.newPropertySubject.next(data);
 }
}
