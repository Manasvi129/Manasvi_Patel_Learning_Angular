import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JewelleryListComponent } from "./jewellery-list/jewellery-list.component";
import { JewelleryListItemComponent } from "./jewellery-listitem/jewellery-listitem.component";
import { JewelleryService } from './services/JewelleryService';
import { Jewellery } from './models/jewel.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, JewelleryListComponent, JewelleryListItemComponent],
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
      // Retrieve a specific item (let's say with id 3)
      this.featuredItem = items.find(item => item.id === 3);
    });
  }
}
