import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PricingComponent } from './pricing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PromoPageModule } from '../promo/promo.module';

const routes: Routes = [
  {
    path: '',
    component: PricingComponent,
  },
];

@NgModule({
  declarations: [PricingComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes), PromoPageModule],
  exports: [PricingComponent],
})
export class PricingModule {}
