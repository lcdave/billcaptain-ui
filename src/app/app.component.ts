import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {TopbarComponent} from "./components/topbar/topbar.component";
import {SidenavigationComponent} from './components/sidenavigation/sidenavigation.component';
import {NavigationItem} from '@shared/models';
import {NavigationService} from '@shared/services/navigation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, TopbarComponent, SidenavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  sidebarNavigation: NavigationItem[] = [];

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.sidebarNavigation = this.navigationService.getNavigationItems();
  }
}
