import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'product-page',
    component: ProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }