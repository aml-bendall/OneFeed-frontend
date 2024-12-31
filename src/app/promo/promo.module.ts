import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PromoPage } from './promo-page.component';
import { PromoHeaderComponent } from 'src/app/promo/promo-header/promo-header.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLink
  ],
  declarations: [
    PromoPage,
    PromoHeaderComponent
  ],
  exports: [PromoHeaderComponent]
})
export class PromoPageModule {}
