import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderDrinksComponent } from './orderDrinks/orderDrinks.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
   declarations: [
      AppComponent,
      OrderDrinksComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgSelectModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
