import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { OptionsComponent } from './options.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DashboardHeaderComponent } from '../dashboard/dashboard-header/dashboard-header.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [OptionsComponent], // Declare OptionsComponent
  imports: [
    CommonModule, // Required for Angular directives like *ngIf and *ngFor
    FormsModule,  // Required for form handling
    IonicModule,  // Required for Ionic components
    DashboardModule,
    RouterLink
  ],
  exports: [OptionsComponent, DashboardHeaderComponent], // Export OptionsComponent for use outside
})
export class OptionsModule {}
