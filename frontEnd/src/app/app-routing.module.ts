import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DrinksMenuComponent } from "./drinks-menu/drinks-menu.component";

const routes: Routes = [{ path: "menu", component: DrinksMenuComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
