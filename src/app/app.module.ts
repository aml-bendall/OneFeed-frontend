import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginModule } from './auth/login/login.module';
import { CreateAccountModule } from './auth/create-account/create-account.module';
import { DashboardModule } from './dashboard/dashboard.module'; // Import DashboardModule
import { OptionsModule } from './options/options.module';
import { FeaturesModule } from './features/features.module';
import { PricingModule } from './pricing/pricing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    LoginModule,
    CreateAccountModule,
    DashboardModule, // Add DashboardModule
    AppRoutingModule,
    OptionsModule,
    FeaturesModule,
    PricingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
