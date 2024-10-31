import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JewelleryService } from '../services/JewelleryService';
import { Jewellery } from '../models/jewel.interface';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  modifyForm!: FormGroup;
  isAddMode: boolean = true;

  constructor(
    private fb: FormBuilder,
    private jewelleryService: JewelleryService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.modifyForm = this.fb.group({
      id: [''], // ID can be empty when adding a new item
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', Validators.required],
      caratWeight: ['', [Validators.required, Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  onSubmit(): void {
    if (this.modifyForm.valid) {
      const jewelleryItem: Jewellery = this.modifyForm.value;
      if (this.isAddMode) {
        this.addItem(jewelleryItem);
      } else {
        this.updateItem(jewelleryItem);
      }
    }
  }

  addItem(item: Jewellery): void {
    this.jewelleryService.addItem(item).subscribe(
      (result: Jewellery) => {
        console.log('Item added successfully', result);
        this.modifyForm.reset(); // Reset the form after adding
      },
      (error: any) => console.error('Error adding item', error)
    );
  }

  updateItem(item: Jewellery): void {
    this.jewelleryService.updateItem(item).subscribe(
      (result: Jewellery | undefined) => {
        console.log('Item updated successfully', result);
      },
      (error: any) => console.error('Error updating item', error)
    );
  }

  loadItemForEdit(id: number): void {
    this.isAddMode = false; // Set mode to update
    this.jewelleryService.getItemById(id).subscribe(
      (item: Jewellery | undefined) => {
        if (item) {
          this.modifyForm.patchValue(item); // Populate the form with existing item data
        }
      },
      (error: any) => console.error('Error loading item', error)
    );
  }
}
