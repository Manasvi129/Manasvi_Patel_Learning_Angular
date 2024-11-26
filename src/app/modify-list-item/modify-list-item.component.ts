import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { JewelleryService } from '../services/JewelleryService';
import { Jewellery } from '../models/jewel.interface';
import { ActivatedRoute } from '@angular/router';
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  modifyForm!: FormGroup;
  isAddMode: boolean = true;
  existingIds: number[] = []; // Array to hold existing IDs

  constructor(
    private fb: FormBuilder,
    private jewelleryService: JewelleryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadItemForEditIfIdPresent();
  }

  initForm(): void {
    this.modifyForm = this.fb.group({
      id: ['', [Validators.required, idValidator]], // Apply custom ID validator
      name: ['', [Validators.required, Validators.minLength(3), productNameValidator]], // Apply product name validator
      type: ['', Validators.required],
      caratWeight: ['', [Validators.required, Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: [''], // Initially not required for adding
      imageUrl: [''] // Initially not required for adding
    });

    this.jewelleryService.getAllItems().subscribe(items => {
      this.existingIds = items.map(item => item.id); // Store existing IDs for validation
      // @ts-ignore
      this.modifyForm.get('id')?.setAsyncValidators(uniqueIdValidator(this.existingIds)); // Set async validator for ID
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
    // Set description and imageUrl as required for updating
    this.modifyForm.get('description')?.setValidators([Validators.required, Validators.maxLength(500)]);
    this.modifyForm.get('imageUrl')?.setValidators([Validators.required, Validators.pattern('https?://.+')]);

    // Update the form controls to trigger validation
    this.modifyForm.get('description')?.updateValueAndValidity();
    this.modifyForm.get('imageUrl')?.updateValueAndValidity();

    this.jewelleryService.updateItem(item).subscribe(
      (result: Jewellery | undefined) => {
        console.log('Item updated successfully', result);
        this.modifyForm.reset(); // Reset the form after updating
      },
      (error: any) => console.error('Error updating item', error)
    );
  }

  loadItemForEditIfIdPresent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadItemForEdit(+id); // Load item for editing if ID is present
    }
  }

  loadItemForEdit(id: number): void {
    this.isAddMode = false; // Set mode to update
    this.jewelleryService.getItemById(id).subscribe(
      (item: Jewellery | undefined) => {
        if (item) {
          this.modifyForm.patchValue(item); // Populate the form with existing item data

          // Set validators for description and imageUrl since we're editing
          this.modifyForm.get('description')?.setValidators([Validators.required, Validators.maxLength(500)]);
          this.modifyForm.get('imageUrl')?.setValidators([Validators.required, Validators.pattern('https?://.+')]);

          // Update the form controls to trigger validation
          this.modifyForm.get('description')?.updateValueAndValidity();
          this.modifyForm.get('imageUrl')?.updateValueAndValidity();
        }
      },
      (error: any) => console.error('Error loading item', error)
    );
  }
}


function idValidator(control: AbstractControl): ValidationErrors | null {
  const idValue = control.value;
  const isValid = /^\d+$/.test(idValue) && Number(idValue) > 0; // Check if ID is a positive number
  return isValid ? null : { invalidId: true }; // Return error if invalid
}

function productNameValidator(control: AbstractControl): ValidationErrors | null {
  const nameValue = control.value;
  const hasSpecialChars = /[#!?]/.test(nameValue); // Check for specific special characters
  return hasSpecialChars ? { invalidName: true } : null; // Return error if invalid
}

function uniqueIdValidator(existingIds: number[]) {
  return (control: AbstractControl): ValidationErrors | null => {
    const idValue = control.value;
    const isUnique = !existingIds.includes(Number(idValue));
    return isUnique ? null : { duplicateId: true }; // Return error if not unique
  };
}
