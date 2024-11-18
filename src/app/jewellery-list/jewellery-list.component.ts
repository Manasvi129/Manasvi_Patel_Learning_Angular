import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JewelleryListItemComponent } from "../jewellery-listitem/jewellery-listitem.component";
import { NgClass, NgForOf, NgIf, UpperCasePipe, CurrencyPipe, DecimalPipe } from "@angular/common";
import { JewelleryService } from '../services/JewelleryService';
import { Jewellery } from '../models/jewel.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'jewellery-list',
  templateUrl: './jewellery-list.component.html',
  standalone: true,
  imports: [
    JewelleryListItemComponent,
    NgClass,
    NgForOf,
    NgIf,
    UpperCasePipe,
    CurrencyPipe,
    DecimalPipe
  ],
  styleUrls: ['./jewellery-list.component.css']
})
export class JewelleryListComponent implements OnInit {
  @Input() jewels: Jewellery[] | null = null;
  @Output() itemClick = new EventEmitter<Jewellery>();

  jewelleryItems: Jewellery[] = [];
  protected errorMessage: string | null = null;

  constructor(private jewelleryService: JewelleryService, private router: Router) {}

  ngOnInit(): void {
    this.fetchJewelleryItems();
  }

  fetchJewelleryItems(): void {
    this.jewelleryService.getAllItems().subscribe(
      items => {
        this.jewelleryItems = items;
      },
      error => {
        console.error('Error fetching jewellery items', error);
        this.errorMessage = 'Failed to fetch jewellery items. Please try again later.';
      }
    );
  }

  onItemClick(item: Jewellery): void {
    this.itemClick.emit(item);
  }

  editItem(id: number): void {
    this.router.navigate(['/modify', id]);
  }

  deleteItem(id: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.jewelleryService.deleteItem(id).subscribe(
        success => {
          if (success) {
            this.jewelleryItems = this.jewelleryItems.filter(item => item.id !== id);
            console.log('Item deleted successfully');
          }
        },
        error => {
          this.errorMessage = 'Failed to delete item: ' + error;
        }
      );
    }
  }
}
