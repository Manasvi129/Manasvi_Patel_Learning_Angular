import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jewellery } from '../models/jewel.interface';

@Injectable({
  providedIn: 'root'
})
export class JewelleryService {
  private apiUrl = 'https://your-api-url.com/api/jewelleries';

  constructor(private http: HttpClient) {}

  // CREATE: Add a new item
  addItem(item: Omit<Jewellery, 'id'>): Observable<Jewellery> {
    return this.http.post<Jewellery>(this.apiUrl, item, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // READ: Get all items
  getAllItems(): Observable<Jewellery[]> {
    return this.http.get<Jewellery[]>(this.apiUrl);
  }

  // READ: Get a single item by ID
  getItemById(id: number): Observable<Jewellery> {
    return this.http.get<Jewellery>(`${this.apiUrl}/${id}`);
  }

  // UPDATE: Update an existing item
  updateItem(updatedItem: Jewellery): Observable<Jewellery> {
    return this.http.put<Jewellery>(`${this.apiUrl}/${updatedItem.id}`, updatedItem, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // DELETE: Remove an item
  deleteItem(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
