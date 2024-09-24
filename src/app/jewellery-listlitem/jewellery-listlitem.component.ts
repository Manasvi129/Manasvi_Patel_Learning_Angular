import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jewellery-listlitem',
  standalone: true,
  imports: [],
  templateUrl: './jewellery-listlitem.component.html',
  styleUrl: './jewellery-listlitem.component.css'
})
export class ContentListItemComponent {
  @Input() jewellery!: any;
}
