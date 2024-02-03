import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section>
      <form class="mt-5">
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
