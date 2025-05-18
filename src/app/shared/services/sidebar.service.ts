import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {
  private sidebarState = signal<boolean>(true);
  public readonly isExpanded = this.sidebarState.asReadonly();

  expand(): void {
    this.sidebarState.update(state => !state);
  }
}
