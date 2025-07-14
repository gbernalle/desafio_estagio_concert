import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent {
  isExpanded = signal(true);

  toggleSidebar() {
    this.isExpanded.update(value => !value);
  }

  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard'
    },
    {
      routeLink: 'machine',
      icon: 'fal fa-tv',
      label: 'Machine'
    },
    {
      routeLink: 'maps',
      icon: 'fal fa-map-marker',
      label: 'Maps'
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Settings'
    }
  ]
}
