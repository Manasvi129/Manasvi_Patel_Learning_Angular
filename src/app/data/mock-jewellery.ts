import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Jewellery } from '../models/jewel.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'api/jewelleries'; // URL to web api

  constructor(private http: HttpClient) { }

  // GET all jewelleries
  getJewelleries(): Observable<Jewellery[]> {
    return this.http.get<Jewellery[]>(this.apiUrl);
  }

  // GET jewellery by id
  getJewellery(id: number): Observable<Jewellery> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Jewellery>(url);
  }

  // POST: add a new jewellery item
  addJewellery(jewellery: Jewellery): Observable<Jewellery> {
    return this.http.post<Jewellery>(this.apiUrl, jewellery);
  }

  // PUT: update an existing jewellery item
  updateJewellery(jewellery: Jewellery): Observable<any> {
    return this.http.put(this.apiUrl, jewellery);
  }

  // DELETE: delete a jewellery item
  deleteJewellery(id: number): Observable<Jewellery> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Jewellery>(url);
  }
}
