import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    DashboardPage, // Declare DashboardPage
    DashboardHeaderComponent, // Declare DashboardHeaderComponent
  ],
  imports: [
    CommonModule, // Required for Angular directives like *ngIf and *ngFor
    FormsModule, // Required for form handling
    IonicModule,
    RouterLink // Required for Ionic components
  ],
  exports: [
    DashboardPage, // Export if used outside the module
    DashboardHeaderComponent, // Export if used outside the module
  ],
})
export class DashboardModule {}
