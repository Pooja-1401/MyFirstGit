import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { Product5Component } from './product5/product5.component';
import { Product6Component } from './product6/product6.component';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    Product4Component,
    Product5Component,
    Product6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
