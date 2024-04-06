import { Component, Inject  } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: '[app-add-item-modal]',
  templateUrl: './add-item-modal.component.html',
  styleUrl: './add-item-modal.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogActions, MatDialogContent ],
})
export class AddItemDialogComponent {
  formData: any = {
    name: '',
    weight: '',
    quantity: '',
    price: '',
    imageUrl: ''
  };
  
  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  submitForm() {
    this.dialogRef.close(this.formData);
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}