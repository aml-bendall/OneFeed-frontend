import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { OptionsComponent } from './options/options.component';
import { DashboardPage } from './dashboard/dashboard.page';
import { PromoPage } from './promo/promo-page.component';
import { FeaturesPageComponent } from './features/features-page.component';
import { PricingComponent } from './pricing/pricing-page.component';

const routes: Routes = [
  {
    path: '',
    component: PromoPage, // Default route for promo page
  },
  {
    path: 'login',
    component: LoginComponent, // Login component
  },
  {
    path: 'create-account',
    component: CreateAccountComponent, // Create Account component
  },
  {
    path: 'dashboard',
    component: DashboardPage, // Dashboard component
  },
  {
    path: 'options',
    component: OptionsComponent, // Options component
  },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'pricing', component: PricingComponent },
  {
    path: '**',
    redirectTo: '', // Wildcard route redirects to promo page
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
