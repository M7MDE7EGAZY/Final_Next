import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from '../product-page/product-page.component';

const routes: Routes = [
  { path: '', component: ProductPageComponent },
  // Other product-related routes can be added here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
