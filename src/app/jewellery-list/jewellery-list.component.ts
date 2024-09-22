import { Component, Input} from '@angular/core';

interface Jewellery {
  id: number;
  name: string;
  type: string;
  material: string;
  price: number;
  description?: string;
}

@Component({
  selector: 'app-jewellery-list',
  standalone: true,
  imports: [],
  templateUrl: './jewellery-list.component.html',
  styleUrl: './jewellery-list.component.css'
})
export class JewelleryListComponent {
  @Input() jewellery!: Jewellery; // Accepts a jewellery item as input
  jewelleryList: Jewellery[] = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      type: "Ring",
      material: "18K White Gold",
      price: 2999,
      description: "Classic diamond solitaire ring, perfect for engagements."
    },
    {
      id: 2,
      name: "Pearl Necklace",
      type: "Necklace",
      material: "Cultured Freshwater Pearls",
      price: 599,
      description: "Elegant strand of cultured freshwater pearls."
    },
    {
      id: 3,
      name: "Sapphire Stud Earrings",
      type: "Earrings",
      material: "14K Yellow Gold",
      price: 799,
      description: "Beautiful blue sapphire studs set in yellow gold."
    },
    {
      id: 4,
      name: "Gold Chain Bracelet",
      type: "Bracelet",
      material: "14K Gold",
      price: 449,
      description: "Delicate gold chain bracelet, perfect for everyday wear."
    },
    {
      id: 5,
      name: "Emerald Pendant",
      type: "Pendant",
      material: "Sterling Silver",
      price: 349,
      description: "Stunning emerald pendant on a sterling silver chain."

    }
  ];
}
