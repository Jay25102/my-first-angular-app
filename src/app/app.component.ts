import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  // templateUrl: './app.component.html',
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="..//public/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
