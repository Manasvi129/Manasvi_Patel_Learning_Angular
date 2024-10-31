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
  @Input() jewels: Jewellery[] | null = null; // Input property to receive jewellery items
  @Output() itemClick = new EventEmitter<Jewellery>(); // Event emitter for item clicks

  jewelleryItems: Jewellery[] = []; // Local array to store jewellery items

  constructor(private jewelleryService: JewelleryService, private router: Router) {}

  ngOnInit(): void {
    if (this.jewels) {
      this.jewelleryItems = this.jewels; // Use input jewels if provided
    } else {
      this.jewelleryService.getAllItems().subscribe(items => {
        this.jewelleryItems = items; // Fetch items if no input provided
      });
    }
  }

  onItemClick(item: Jewellery) {
    this.itemClick.emit(item); // Emit item click event
  }

  editItem(id: number) {
    this.router.navigate(['/modify', id]); // Navigate to modify route with item ID
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
