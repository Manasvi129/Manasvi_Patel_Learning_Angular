import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JewelleryListItemComponent } from "../jewellery-listitem/jewellery-listitem.component";
import { NgClass, NgForOf } from "@angular/common";
import { JewelleryService } from '../services/JewelleryService';
import { Jewellery } from '../models/jewel.interface';

@Component({
  selector: 'jewellery-list',
  templateUrl: './jewellery-list.component.html',
  standalone: true,
  imports: [
    JewelleryListItemComponent,
    NgClass,
    NgForOf
  ],
  styleUrls: ['./jewellery-list.component.css']
})
export class JewelleryListComponent implements OnInit {
  @Input() jewels: Jewellery[] | null = null;
  @Output() itemClick = new EventEmitter<Jewellery>();

  jewelleryItems: Jewellery[] = [];

  constructor(private jewelleryService: JewelleryService) {}

  ngOnInit(): void {
    if (this.jewels) {
      this.jewelleryItems = this.jewels;
    } else {
      this.jewelleryService.getAllItems().subscribe(items => {
        this.jewelleryItems = items;
      });
    }
  }

  onItemClick(item: Jewellery) {
    this.itemClick.emit(item);
  }
}
