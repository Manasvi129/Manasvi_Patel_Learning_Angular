import {JewelleryListItemComponent} from "../jewellery-listitem/jewellery-listitem.component";

interface Jewellery {
  id: number;
  title: string;
  description: string;
  creator: string;
  imgURL: string;
  type: string;
  price: number;
}

import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'jewellery-list',
  templateUrl: './jewellery-list.component.html',
  standalone: true,
  imports: [
    JewelleryListItemComponent,
    NgStyle
  ],
  styleUrls: ['./jewellery-list.component.css']
})
export class JewelleryListComponent {
  jewelleryItems: Jewellery[] = [
    {
      id: 1,
      title: "Diamond Solitaire Ring",
      description: "A classic 1-carat diamond solitaire set in 18k white gold.",
      creator: "Tiffany & Co.",
      imgURL: "https://example.com/diamond-ring.jpg",
      type: "Ring",
      price: 5999.99
    },
    {
      id: 2,
      title: "Pearl Necklace",
      description: "Elegant strand of cultured Akoya pearls with a 14k gold clasp.",
      creator: "Mikimoto",
      imgURL: "https://example.com/pearl-necklace.jpg",
      type: "Necklace",
      price: 2500.00
    },
    {
      id: 3,
      title: "Sapphire Stud Earrings",
      description: "Beautiful blue sapphire studs set in platinum.",
      creator: "Blue Nile",
      imgURL: "https://example.com/sapphire-earrings.jpg",
      type: "Earrings",
      price: 1200.00
    },
    {
      id: 4,
      title: "Gold Chain Bracelet",
      description: "18k gold chain bracelet with a lobster clasp.",
      creator: "Cartier",
      imgURL: "https://example.com/gold-bracelet.jpg",
      type: "Bracelet",
      price: 3500.00
    },
    {
      id: 5,
      title: "Emerald Pendant",
      description: "Stunning emerald pendant surrounded by diamonds, set in white gold.",
      creator: "Harry Winston",
      imgURL: "https://example.com/emerald-pendant.jpg",
      type: "Pendant",
      price: 7500.00
    }
  ];
}
