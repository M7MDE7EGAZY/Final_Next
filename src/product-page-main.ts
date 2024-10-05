import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductPageComponent } from './app/product-page/product-page.component';


bootstrapApplication(ProductPageComponent)
  .catch(err => console.error(err));
