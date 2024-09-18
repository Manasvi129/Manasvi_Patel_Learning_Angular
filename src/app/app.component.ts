import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Jewel } from './models/jewel.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Manasvi-Patel-Learning-Angular';
  name: string = 'Manasvi';
  age: number = 28;

  jewels: Jewel[] = [
    {
      id: 1,
      name: "Diamond Ring",
      type: "ring",
      caratWeight: 1.5,
      price: 500,
      description: "A stunning diamond solitaire ring"
    },
    {
      id: 2,
      name: "Sapphire Necklace",
      type: "necklace",
      caratWeight: 2.0,
      price: 3500,
      description: "An elegant blue sapphire pendant"
    },
    {
      id: 3,
      name: "Emerald Earrings",
      type: "earrings",
      caratWeight: 1.0,
      price: 2800
    },
    {
      id: 4,
      name: "Ruby Bracelet",
      type: "bracelet",
      caratWeight: 3.5,
      price: 4200,
      description: "A luxurious ruby-studded bracelet"
    },
    {
      id: 5,
      name: "Pearl Necklace",
      type: "necklace",
      caratWeight: 2.0,
      price: 1500,
      description: "A classic string of cultured pearls"
    },
    {
      id: 6,
      name: "Opal Ring",
      type: "ring",
      caratWeight: 0.75,
      price: 1800
    }
  ];
}
