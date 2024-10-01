import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Jewellery } from '../models/jewel.interface';

@Injectable({
  providedIn: 'root'
})
export class JewelleryService {
  private jewelleryItems: Jewellery[] = [
    {id: 1, name: "Diamond Ring", type: "Ring", caratWeight: 1.5, price: 5000, description: "Stunning solitaire diamond ring with a brilliant cut"},
    {id: 2, name: "Pearl Necklace", type: "Necklace", caratWeight: 0.5, price: 2000, description: "Elegant freshwater pearl necklace with a silver clasp"},
    {id: 3, name: "Sapphire Earrings", type: "Earrings", caratWeight: 0.75, price: 1500, description: "Beautiful blue sapphire stud earrings set in white gold"},
    {id: 4, name: "Emerald Bracelet", type: "Bracelet", caratWeight: 2.0, price: 3500, description: "Elegant emerald bracelet featuring vibrant green stones"},
    {id: 5, name: "Ruby Pendant", type: "Pendant", caratWeight: 1.0, price: 2500, description: "Exquisite ruby pendant with a delicate gold chain"},
    {id: 6, name: "Opal Brooch", type: "Brooch", caratWeight: 1.25, price: 1800, description: "Vintage-style opal brooch with intricate filigree work"}
  ];

  getAllItems(): Observable<Jewellery[]> {
    return of(this.jewelleryItems);
  }
}
