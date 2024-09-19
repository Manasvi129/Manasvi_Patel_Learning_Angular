import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Jewel } from './models/jewel.interface';
import { JsonPipe, NgForOf } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jewel Catalog';

  jewel1: Jewel = {id: 1, name: "Diamond Ring", type: "Ring", caratWeight: 1.5, price: 5000, description: "Stunning solitaire diamond ring"};
  jewel2: Jewel = {id: 2, name: "Pearl Necklace", type: "Necklace", caratWeight: 0.5, price: 2000};

  jewelList: Jewel[] = [
    this.jewel1,
    this.jewel2,
    {id: 3, name: "Sapphire Earrings", type: "Earrings", caratWeight: 0.75, price: 1500},
    {id: 4, name: "Emerald Bracelet", type: "Bracelet", caratWeight: 2.0, price: 3500, description: "Elegant emerald bracelet"},
    {id: 5, name: "Ruby Pendant", type: "Pendant", caratWeight: 1.0, price: 2500},
    {id: 6, name: "Opal Brooch", type: "Brooch", caratWeight: 1.25, price: 1800, description: "Vintage-style opal brooch"}
  ];

  // Function that gets called from our onclick. Takes in an
  // argument of a variable called jewel, which is type Jewel and returns void
  toggleDescription(jewel: Jewel): void {
    if (jewel.description) {
      jewel.description = undefined;
    } else {
      jewel.description = "No description available";
    }
  }
}
