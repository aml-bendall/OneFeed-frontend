import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FeaturesPageComponent } from './features-page.component';
import { RouterModule } from '@angular/router';
import { PromoPageModule } from '../promo/promo.module';

@NgModule({
  declarations: [FeaturesPageComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: FeaturesPageComponent }]),
    PromoPageModule // Local routing
  ],
})
export class FeaturesModule {}
