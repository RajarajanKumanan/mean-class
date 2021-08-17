import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductInfoComponent } from './product-info/product-info.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ProductHomeComponent },
  { path: 'product-details/:productName', component: ProductDetailsComponent, },
  { path: 'product-info/:productID', component: ProductInfoComponent },
  { path: 'product-cart', component: ProductCartComponent },
  { path: "**", component: PageNotFoundComponent },
  //{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
