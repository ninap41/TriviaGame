import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; 
 import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { YourproductsComponent } from './yourproducts/yourproducts.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { StartproductgameComponent } from './startproductgame/startproductgame.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomepageComponent,
    CreateproductComponent,
    EditproductComponent,
    YourproductsComponent,
    ViewproductComponent,
    StartproductgameComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
