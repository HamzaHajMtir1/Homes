import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h3 class="listing-heading">{{ housingLocation.name }}</h3>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    </section>
    `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
