import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyItemComponent } from './components/property-item/property-item.component';
import { PropertiesService } from './services/properties.service';
import { AddToListFormComponent } from './components/add-to-list-form/add-to-list-form.component';
import { SortByPipe } from './pipes/sort-by.pipe';

const appRoutes: Routes = [
  { path:'', redirectTo:'/list', pathMatch:'full'},
  { path:'list', component:PropertyListComponent},
  { path:'add/:value', component:AddToListFormComponent},
  //{ path:'**', component:NoPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyItemComponent,
    AddToListFormComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
