import { Component, OnInit } from '@angular/core';
import { JewelleryListItemComponent } from "../jewellery-listitem/jewellery-listitem.component";
import { NgClass, NgForOf } from "@angular/common";
import { JewelleryService } from '../services/JewelleryService'; // Import the service
import { Jewellery } from '../data/mock-jewellery';

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

  jewelleryItems: Jewellery[] = [];

  constructor(private jewelleryService: JewelleryService) {} // Inject the service

  ngOnInit(): void {
    this.jewelleryItems = this.jewelleryService.getAll(); // Fetch all items on initialization
  }
}
