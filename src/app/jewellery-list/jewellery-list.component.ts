import { Component } from '@angular/core';
import {JewelleryListItemComponent} from "../jewellery-listitem/jewellery-listitem.component";
import {NgClass, NgForOf} from "@angular/common";

interface Jewellery {
  id: number;
  title: string;
  description: string;
  creator: string;
  imgURL: string; // Image URL
  type: string;
  price: number;
}

@Component({
  selector: 'jewellery-list',
  templateUrl: './jewellery-list.component.html',
  standalone: true,
  imports: [
    JewelleryListItemComponent,
    NgClass,
    NgForOf
  ],
  styleUrls: ['./jewellery-list.component.css']
})
export class JewelleryListComponent {
  jewelleryItems: Jewellery[] = [
    {
      id: 1,
      title: "Diamond Solitaire Ring",
      description: "A classic diamond solitaire set in white gold.",
      creator: "Tiffany & Co.",
      imgURL: "https://cdn.shopify.com/s/files/1/0081/7496/0736/t/5/assets/pf-2b3777ef-2ff8-442e-be4d-7cdf4e124d90--saltandpepperdiamondclawprongs.jpg?v=1576239493", // Unique image for each item
      type: "Ring",
      price: 5999.99
    },
    {
      id: 2,
      title: "Pearl Necklace",
      description: "Elegant strand of cultured Akoya pearls.",
      creator: "Mikimoto",
      imgURL: "https://i.etsystatic.com/5933460/r/il/b3ae5a/1900793620/il_fullxfull.1900793620_2o07.jpg",
      type: "Necklace",
      price: 2500.00
    },
    {
      id: 3,
      title: "Sapphire Stud Earrings",
      description: "Beautiful blue sapphire studs set in platinum.",
      creator: "Blue Nile",
      imgURL: "https://i.ebayimg.com/images/g/CAoAAOSwwtdicho-/s-l1200.jpg",
      type: "Earrings",
      price: 1200.00
    },
    {
      id: 4,
      title: "Gold Chain Bracelet",
      description: "18k gold chain bracelet with a lobster clasp.",
      creator: "Cartier",
      imgURL: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/88MAAOSwHX9ha3ad/$_57.JPG?set_id=8800005007",
      type: "Bracelet",
      price: 3500.00
    },
    {
      id: 5,
      title: "Emerald Pendant",
      description: "Stunning emerald pendant surrounded by diamonds, set in white gold.",
      creator: "Harry Winston",
      imgURL: "https://www.mrporter.com/variants/images/1647597287204713/in/w2000_q60.jpg", // Unique image for each item
      type: "Pendant",
      price: 7500.00
    }
  ];
}
