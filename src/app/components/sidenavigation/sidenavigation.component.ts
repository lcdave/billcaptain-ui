import {Component, Input} from '@angular/core';
import {NavigationItem} from '@shared/models';
import {CommonModule} from '@angular/common';
import {LogoComponent} from '../logo/logo.component';
import {IconComponent} from '../icon/icon.component';
import {SidebarService} from '@shared/services/sidebar.service';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  standalone: true,
  imports: [CommonModule, LogoComponent, IconComponent, RouterLink, RouterLinkActive],

})

export class SidenavigationComponent {
  @Input() navigationItems: NavigationItem[] = [];
  readonly isExpanded;

  constructor(private sidebarService: SidebarService) {
    this.isExpanded = this.sidebarService.isExpanded;
  }

  expandSidebar(): void {
    this.sidebarService.expand();
  }
}
