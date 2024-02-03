import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <div class="container">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.png" alt="logo" aria-hidden="true">
        </header>
        <section class="content">
          <app-home></app-home>
        </section>
      </div>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Homes';
}
