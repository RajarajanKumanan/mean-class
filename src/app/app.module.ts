import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    ViewItemsComponent,
    ProductDetailsComponent,
    ProductInfoComponent,
    ProductCartComponent,
    ProductHomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
