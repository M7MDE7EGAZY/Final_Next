import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
})
export class AppModule {}