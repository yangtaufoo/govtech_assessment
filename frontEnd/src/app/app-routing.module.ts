import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDrinksComponent } from './orderDrinks/orderDrinks.component';


const routes: Routes = [
  {
    path: 'order_drinks',
    component: OrderDrinksComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
