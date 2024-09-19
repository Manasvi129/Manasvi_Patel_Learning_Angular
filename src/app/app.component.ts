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

  jewel1: Jewel = {id: 1, name: "Diamond Ring", type: "Ring", caratWeight: 1.5, price: 5000, description: "Stunning solitaire diamond ring with a brilliant cut"};
  jewel2: Jewel = {id: 2, name: "Pearl Necklace", type: "Necklace", caratWeight: 0.5, price: 2000, description: "Elegant freshwater pearl necklace with a silver clasp"};

  jewelList: Jewel[] = [
    this.jewel1,
    this.jewel2,
    {id: 3, name: "Sapphire Earrings", type: "Earrings", caratWeight: 0.75, price: 1500, description: "Beautiful blue sapphire stud earrings set in white gold"},
    {id: 4, name: "Emerald Bracelet", type: "Bracelet", caratWeight: 2.0, price: 3500, description: "Elegant emerald bracelet featuring vibrant green stones"},
    {id: 5, name: "Ruby Pendant", type: "Pendant", caratWeight: 1.0, price: 2500, description: "Exquisite ruby pendant with a delicate gold chain"},
    {id: 6, name: "Opal Brooch", type: "Brooch", caratWeight: 1.25, price: 1800, description: "Vintage-style opal brooch with intricate filigree work"}
  ];

  toggleDescription(jewel: Jewel): void {
    if (jewel.description) {
      jewel.description = undefined;
    } else {
      jewel.description = "No description available";
    }
  }
}
