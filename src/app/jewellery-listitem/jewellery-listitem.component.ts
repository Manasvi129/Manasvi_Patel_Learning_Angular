import { Component, Input } from '@angular/core';
import { Jewellery } from '../models/jewel.interface';
import { CurrencyPipe } from '@angular/common';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-jewellery-listitem',
  templateUrl: './jewellery-listitem.component.html',
  standalone: true,
  imports: [CurrencyPipe, MatCardModule],
  styleUrls: ['./jewellery-listitem.component.css']
})
export class JewelleryListItemComponent {
  @Input({
    transform: (value: Jewellery): Jewellery => {
      return value; // You can add any transformation logic here if needed
    }
  }) jewel!: Jewellery;
}
