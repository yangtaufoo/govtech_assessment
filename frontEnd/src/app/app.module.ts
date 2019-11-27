import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DrinksMenuComponent } from "./drinks-menu/drinks-menu.component";

@NgModule({
  declarations: [AppComponent, DrinksMenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, DrinksMenuComponent]
})
export class AppModule {}
