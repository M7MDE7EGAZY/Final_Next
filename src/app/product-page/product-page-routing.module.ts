import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from '../product-page/product-page.component'; // Your product page component

const routes: Routes = [
  { path: 'product-page', component: ProductPageComponent }, // Route for product page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
