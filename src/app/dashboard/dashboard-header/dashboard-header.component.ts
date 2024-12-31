import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
  standalone: false
})
export class DashboardHeaderComponent implements OnInit {
  profileImageUrl = 'assets/default-profile.png'; // Default profile image

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToOptions() {
    this.router.navigate(['/options']);
  }

  logout() {
    this.authService.logout(); // Assuming your AuthService has a logout method
    this.router.navigate(['/login']);
  }
}
