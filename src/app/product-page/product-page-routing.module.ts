import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component'; // Your main page component
import { ProductPageComponent } from '../product-page/product-page.component'; // Your product page component

const routes: Routes = [
  { path: '', component: AppComponent }, // Default route for index.html
  { path: 'product-page', component: ProductPageComponent }, // Route for product page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
