import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ToastController,
  LoadingController,
} from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
  standalone: false
})
export class OptionsComponent {
  constructor(
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async connectPlatform(platform: string): Promise<void> {
    const loading = await this.loadingController.create({
      message: `Connecting to ${platform}...`,
    });
    await loading.present();

    try {
      // Simulate an API call or connection process
      setTimeout(async () => {
        await loading.dismiss();
        this.showToast(`${platform} connected successfully!`);
      }, 2000);
    } catch (error) {
      await loading.dismiss();
      this.showToast(`Failed to connect to ${platform}. Please try again.`);
    }
  }

  async showToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }

  navigateNext(): void {
    this.router.navigate(['/home']); // Change '/home' to the appropriate next page
  }
}
