import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JewelleryListComponent } from "./jewellery-list/jewellery-list.component";
import { JewelleryListItemComponent } from "./jewellery-listitem/jewellery-listitem.component";
import { JewelleryService } from './services/JewelleryService';
import { Jewellery } from './models/jewel.interface';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, JewelleryListComponent, JewelleryListItemComponent, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Jewel Catalog';
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
