import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { TopDestComponent } from './top-dest/top-dest.component';
import { BookingComponent } from './booking/booking.component';
import { CustomerRevComponent } from './customer-rev/customer-rev.component';
import { CoCompaniesComponent } from './co-companies/co-companies.component';
import { SubscribeFollowComponent } from './subscribe-follow/subscribe-follow.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    TopDestComponent,
    BookingComponent,
    CustomerRevComponent,
    CoCompaniesComponent,
    SubscribeFollowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
