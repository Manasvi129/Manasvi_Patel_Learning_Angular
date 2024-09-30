
import { Component } from '@angular/core';
import { JewelleryListItemComponent } from "../jewellery-listitem/jewellery-listitem.component";
import { NgClass, NgForOf } from "@angular/common";
import { jewelleryItems, Jewellery } from '../data/mock-jewellery'; // Import the mock data

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
  jewelleryItems = jewelleryItems; // Use the imported array
}
