// src/app/services/jewellery.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Jewellery } from '../models/jewel.interface';
import { jewelleryItems } from '../data/mock-jewellery';

@Injectable({
  providedIn: 'root'
})
export class JewelleryService {
  private jewelleryItems: Jewellery[] = jewelleryItems;

  constructor() { }

  // CREATE: Add a new item
  addItem(item: Omit<Jewellery, 'id'>): Observable<Jewellery> {
    const newId = Math.max(...this.jewelleryItems.map(i => i.id)) + 1;
    const newItem: Jewellery = { ...item, id: newId };
    this.jewelleryItems.push(newItem);
    return of(newItem);
  }

  // READ: Get all items
  getAllItems(): Observable<Jewellery[]> {
    return of(this.jewelleryItems);
  }

  // READ: Get a single item by ID
  getItemById(id: number): Observable<Jewellery | undefined> {
    const item = this.jewelleryItems.find(item => item.id === id);
    return of(item);
  }

  // UPDATE: Update an existing item
  updateItem(updatedItem: Jewellery): Observable<Jewellery | undefined> {
    const index = this.jewelleryItems.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.jewelleryItems[index] = { ...updatedItem };
      return of(this.jewelleryItems[index]);
    }
    return of(undefined);
  }

  // DELETE: Remove an item
  deleteItem(id: number): Observable<boolean> {
    const initialLength = this.jewelleryItems.length;
    this.jewelleryItems = this.jewelleryItems.filter(item => item.id !== id);
    return of(this.jewelleryItems.length !== initialLength);
  }
}
