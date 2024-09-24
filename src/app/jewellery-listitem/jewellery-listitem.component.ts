import { Component, Input } from '@angular/core';

@Component({
  selector: 'jewellery-list-item',
  templateUrl: './jewellery-listitem.component.html',
  standalone: true,
  styleUrls: ['./jewellery-listitem.component.css']
})
export class JewelleryListItemComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() creator!: string;
  @Input() imgURL!: string;
  @Input() type!: string;
  @Input() price!: number;
}
