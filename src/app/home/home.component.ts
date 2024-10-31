import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JewelleryListComponent } from "../jewellery-list/jewellery-list.component";
import { JewelleryListItemComponent } from "../jewellery-listitem/jewellery-listitem.component";
import { JewelleryService } from '../services/JewelleryService';
import { Jewellery } from '../models/jewel.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, JewelleryListComponent, JewelleryListItemComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jewelList: Jewellery[] = [];
  featuredItem: Jewellery | undefined;

  constructor(private jewelleryService: JewelleryService) {}

  ngOnInit() {
    this.jewelleryService.getAllItems().subscribe(items => {
      this.jewelList = items;
      this.featuredItem = items[0]; // Set the first item as featured initially
    });
  }

  onItemClick(item: Jewellery) {
    this.featuredItem = item; // Update the featured item when a list item is clicked
  }
}
