import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit {
  linkedFeeds: { name: string }[] = []; // Explicitly define type
  selectedFeed: string = ''; // Store the currently selected feed

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkLinkedFeeds();
  }

  async checkLinkedFeeds() {
    try {
      this.linkedFeeds = await this.authService.getLinkedFeeds();
      if (this.linkedFeeds.length > 0) {
        this.selectedFeed = this.linkedFeeds[0].name; // Set default feed
      } else {
        this.router.navigate(['/options']);
      }
    } catch (error) {
      console.error('Failed to fetch linked feeds', error);
    }
  }

  selectFeed(feedName: string) {
    this.selectedFeed = feedName; // Update the selected feed
  }
}
