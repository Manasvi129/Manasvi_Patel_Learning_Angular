import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JewelleryListItemComponent } from "../jewellery-listitem/jewellery-listitem.component";
import { NgClass, NgForOf } from "@angular/common";
import { JewelleryService } from '../services/JewelleryService';
import { Jewellery } from '../models/jewel.interface';
import { Router } from '@angular/router'; // Import Router for navigation

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
export class JewelleryListComponent implements OnInit {
  @Input() jewels: Jewellery[] | null = null;
  @Output() itemClick = new EventEmitter<Jewellery>();

  jewelleryItems: Jewellery[] = [];

  constructor(private jewelleryService: JewelleryService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    if (this.jewels) {
      this.jewelleryItems = this.jewels;
    } else {
      this.jewelleryService.getAllItems().subscribe(items => {
        this.jewelleryItems = items;
      });
    }
  }

  onItemClick(item: Jewellery) {
    this.itemClick.emit(item);
  }

  editItem(id: number) {
    this.router.navigate(['/modify', id]);
  }

  deleteItem(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.jewelleryService.deleteItem(id).subscribe(success => {
        if (success) {
          // Remove the item from the local list
          this.jewelleryItems = this.jewelleryItems.filter(item => item.id !== id);
          console.log('Item deleted successfully');
        }
      }, error => {
        console.error('Error deleting item', error);
      });
    }
  }
}
