import {Component} from '@angular/core';
import {IconComponent} from '../icon/icon.component';
import {SidebarService} from '@shared/services/sidebar.service';
import {TableModule} from 'primeng/table';

@Component({
  standalone: true,
  selector: 'app-topbar',
  imports: [IconComponent, TableModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  readonly sidebarExpanded;

  constructor(private sidebarService: SidebarService) {
    this.sidebarExpanded = sidebarService.isExpanded
  }
}
