import { Component, Input } from '@angular/core';

@Component({
  selector: 'jewellery-list-item',
  templateUrl: './jewellery-listitem.component.html',
  styleUrls: ['./jewellery-list-item.component.css'],
  standalone: true
})
export class JewelleryListItemComponent {
  @Input() title!: string;          // Title of the jewellery item
  @Input() description!: string;    // Description of the jewellery item
  @Input() creator!: string;        // Creator of the jewellery item
  @Input() imgURL!: string;         // Image URL of the jewellery item
  @Input() type!: string;           // Type of jewellery (e.g., Ring, Necklace)
  @Input() price!: number;          // Price of the jewellery item
}
