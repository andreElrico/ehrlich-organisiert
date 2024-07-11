import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
  <mat-toolbar color="warn">
    <span>Ehrlich Organisiert</span>
    <span class="example-spacer"></span>
    <button mat-icon-button>
      <mat-icon>favorite</mat-icon>
    </button>
    <button mat-icon-button>
      <mat-icon>share</mat-icon>
    </button>
  </mat-toolbar>

  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ehrlich-organisiert';
}
