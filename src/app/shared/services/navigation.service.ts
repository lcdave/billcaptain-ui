import {Injectable} from '@angular/core';
import {NavigationItem} from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private readonly navigationItems: NavigationItem[] = [
    {label: 'Dashboard', route: '/home', icon: 'home'},
    {label: 'Customers', route: '/customers', icon: 'users'},
    {label: 'Assignments', route: '/contact', icon: 'list'},
    {label: 'Bills', route: '/contact', icon: 'receipt'}
  ];

  getNavigationItems(): NavigationItem[] {
    return this.navigationItems;
  }
}
