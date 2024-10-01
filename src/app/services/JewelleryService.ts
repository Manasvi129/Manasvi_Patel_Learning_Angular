import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Jewellery } from '../models/jewel.interface';

@Injectable({
  providedIn: 'root'
})
export class JewelleryService {
  private jewelleryItems: Jewellery[] = [
    {
      id: 1,
      name: "Diamond Ring",
      type: "Ring",
      caratWeight: 1.5,
      price: 5000,
      description: "Stunning solitaire diamond ring with a brilliant cut",
      imageUrl: "https://happyjewelers.com/cdn/shop/products/IMG_0967_1445x.jpg?v=1678488811"
    },
    {
      id: 2,
      name: "Pearl Necklace",
      type: "Necklace",
      caratWeight: 0.5,
      price: 2000,
      description: "Elegant freshwater pearl necklace with a silver clasp",
      imageUrl: "https://i.etsystatic.com/10677293/r/il/262964/2834488847/il_fullxfull.2834488847_pgz4.jpg"
    },
    {
      id: 3,
      name: "Sapphire Earrings",
      type: "Earrings",
      caratWeight: 0.75,
      price: 1500,
      description: "Beautiful blue sapphire stud earrings set in white gold",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8R-_7EncRMtjmEWsZCbN8OkkBJpKkAMQDg&s"
    },
    {
      id: 4,
      name: "Emerald Bracelet",
      type: "Bracelet",
      caratWeight: 2.0,
      price: 3500,
      description: "Elegant emerald bracelet featuring vibrant green stones",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2Nm20qR9uKRjImIEzU9Tq_UkcGjEWfNaVQ&s"
    },
    {
      id: 5,
      name: "Ruby Pendant",
      type: "Pendant",
      caratWeight: 1.0,
      price: 2500,
      description: "Exquisite ruby pendant with a delicate gold chain",
      imageUrl: "https://d3kinlcl20pxwz.cloudfront.net/imgs/lp/ruby-pendant-mobile-banner.webp"
    },
    {
      id: 6,
      name: "Opal Brooch",
      type: "Brooch",
      caratWeight: 1.25,
      price: 1800,
      description: "Vintage-style opal brooch with intricate filigree work",
      imageUrl: "https://d17anp2eo56k6j.cloudfront.net/media/catalog/product/cache/69a9f301de1749073166f9043f4fef2a/l/a/large-vintage-opal-brooch_1_50-1-4662.jpg"
    }
  ];

  getAllItems(): Observable<Jewellery[]> {
    return of(this.jewelleryItems);
  }
}
