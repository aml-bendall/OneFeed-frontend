import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-header',
  templateUrl: './promo-header.component.html',
  styleUrls: ['./promo-header.component.scss'],
  standalone: false
})
export class PromoHeaderComponent implements OnInit {
  features = [
    { title: 'Fast Performance', detail: 'Our app is blazing fast...' },
    { title: 'Easy to Use', detail: 'User-friendly UI...' },
    { title: 'Secure', detail: 'Security is top priority...' },
  ];

  constructor() {}

  ngOnInit() {}

  onFeatureClick(feature: any) {
    // Possibly open a modal or do something to show more detail
    alert(`More info about ${feature.title}: ${feature.detail}`);
  }
}
