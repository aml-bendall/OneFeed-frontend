import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateAccountComponent } from './create-account.component';
import { PromoPageModule } from 'src/app/promo/promo.module';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromoPageModule, // Import the PromoHeaderComponent if used
  ]
})
export class CreateAccountModule {}
