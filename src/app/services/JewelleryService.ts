// services/jewellery.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { jewelleryItems, Jewellery } from '../data/mock-jewellery';

@Injectable({
  providedIn: 'root' // This makes the service available throughout the application
})
export class JewelleryService {

  private items: Jewellery[] = jewelleryItems;

  // Method to return an Observable of the jewellery items
  getAllItems(): Observable<Jewellery[]> {
    return of(this.items); // Wraps the items in an Observable
  }


  // Get all jewellery items
  getAll(): Jewellery[] {
    return this.items;
  }

  // Get a jewellery item by ID
  getById(id: number): Jewellery | undefined {
    return this.items.find(item => item.id === id);
  }

  // Create a new jewellery item
  create(newItem: Jewellery): void {
    this.items.push(newItem);
  }

  // Update an existing jewellery item by ID
  update(id: number, updatedItem: Partial<Jewellery>): void {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
    }
  }

  // Delete a jewellery item by ID
  delete(id: number): void {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
