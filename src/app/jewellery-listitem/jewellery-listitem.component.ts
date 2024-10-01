import { Component, Input } from '@angular/core';
import { Jewellery } from '../models/jewel.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-jewellery-listitem',
  templateUrl: './jewellery-listitem.component.html',
  standalone: true,
  imports: [CurrencyPipe],
  styleUrls: ['./jewellery-listitem.component.css']
})
export class JewelleryListItemComponent {
  @Input({
    transform: (value: Jewellery): Jewellery => {
      // You can add any transformation logic here if needed
      // For now, we'll just return the value as is
      return value;
    }
  }) jewel!: Jewellery;
}
