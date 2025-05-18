import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {NavigationItem} from '@shared/models';

@Component({
  selector: 'app-vertical-navigation',
  imports: [CommonModule],
  templateUrl: './vertical-navigation.component.html',
  styleUrl: './vertical-navigation.component.css'
})

export class VerticalNavigationComponent {
  @Input() navigationItems!: NavigationItem[]
}
