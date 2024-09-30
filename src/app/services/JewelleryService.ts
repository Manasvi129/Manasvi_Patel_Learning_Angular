import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { jewelleryItems, Jewellery } from '../data/mock-jewellery';

@Injectable({
  providedIn: 'root'
})
export class JewelleryService {

  private items: Jewellery[] = jewelleryItems;

  // Get all jewellery items
  getAllItems(): Observable<Jewellery[]> {
    return of(this.items);
  }

  // Get a jewellery item by ID
  getById(id: number): Observable<Jewellery | undefined> {
    const item = this.items.find(item => item.id === id);
    return of(item); // Wraps the found item in an Observable
  }

  // Add a new jewellery item
  create(newItem: Jewellery): Observable<Jewellery[]> {
    this.items.push(newItem);
    return of(this.items); // Return the updated array wrapped in an Observable
  }

  // Update an existing jewellery item by ID
  update(updatedItem: Jewellery): Observable<Jewellery[]> {
    const index = this.items.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
    }
    return of(this.items); // Return the updated array wrapped in an Observable
  }

  // Delete a jewellery item by ID
  delete(id: number): Observable<Jewellery | undefined> {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      const removedItem = this.items.splice(index, 1)[0]; // Remove and get the item
      return of(removedItem); // Return the removed item wrapped in an Observable
    }
    return of(undefined); // If not found, return undefined wrapped in an Observable
  }
}
