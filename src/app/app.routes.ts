import { Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Ensure this path is correct
import { ProductPageComponent } from './product-page/product-page.component'; // Ensure this path is correct

export const routes: Routes = [
  { path: '', component: AppComponent }, // Main component for the root
  { path: 'product-page', component: ProductPageComponent } // Product page route
];
