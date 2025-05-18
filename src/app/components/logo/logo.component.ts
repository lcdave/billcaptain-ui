import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-logo',
  imports: [
    NgIf
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  @Input() short = false;
}
