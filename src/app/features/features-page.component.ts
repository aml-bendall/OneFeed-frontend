import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.scss'],
  standalone: false
})
export class FeaturesPageComponent implements OnInit {
  // Example property for dynamic data
  features = [
    {
      icon: 'logo-facebook',
      title: 'Connect All Your Accounts',
      description: 'Link Facebook, Instagram, Twitter, and more to consolidate all your feeds in one place.',
    },
    {
      icon: 'cloud-outline',
      title: 'Cloud Synced',
      description: 'Access your feeds from any device, any time, with real-time updates.',
    },
    {
      icon: 'analytics-outline',
      title: 'Insights & Analytics',
      description: 'Get meaningful insights about your engagement across all platforms.',
    },
    {
      icon: 'lock-closed-outline',
      title: 'Secure & Private',
      description: 'Your data is encrypted and never shared without your permission.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Logic you want to run on initialization
    console.log('FeaturesPageComponent loaded');
  }

  // Example method for additional interactivity
  onFeatureClick(featureTitle: string): void {
    console.log(`Feature clicked: ${featureTitle}`);
    alert(`Learn more about: ${featureTitle}`);
  }
}
