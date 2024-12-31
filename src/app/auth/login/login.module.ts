import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PromoPageModule } from 'src/app/promo/promo.module';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent], // Declare LoginComponent
  imports: [CommonModule, FormsModule, IonicModule, PromoPageModule], // Import necessary modules
  exports: [LoginComponent], // Export LoginComponent to make it available to other modules
})
export class LoginModule {}
