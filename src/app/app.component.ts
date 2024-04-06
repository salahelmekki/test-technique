import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from './add-item-modal/add-item-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'test-technique';
  optionSelected = 1;

  all: any[] = [ { 
    name: 'ananas', 
    weight: '100g', 
    quantity: 5, 
    price: '$5', 
    imageUrl: 'assets/ananas.jpg' 
  },{
    name: 'Apple', 
    weight: '100g', 
    quantity: 5, 
    price: '$5', 
    imageUrl: 'assets/pome.jpeg' 
  },
  { 
    name: 'Pea', 
    weight: '100g', 
    quantity: 5, 
    price: '$5', 
    imageUrl: 'assets/Pea.jpeg' 
  },
  { 
    name: 'banan', 
    weight: '100g', 
    quantity: 5, 
    price: '$5', 
    imageUrl: 'assets/banan.jpeg' 
  },{ 
    name: 'meat', 
    weight: '100g', 
    quantity: 5, 
    price: '$5', 
    imageUrl: 'assets/meat.jpeg' 
  },
  { 
    name: 'Fraise', 
    weight: '100g', 
    quantity: 5, 
    price: '$5', 
    imageUrl: 'assets/fraise.jpg' 
  },
  ];

  todo: any[] = [{ 
    name: 'orange', 
    weight: '100g', 
    quantity: 5, 
    price: '$5', 
    imageUrl: 'assets/orange.jpg' 
  },];

  done: any[] = [{ 
    name: 'Lentils', 
    weight: '100g', 
    quantity: 5, 
    price: '$5', 
    imageUrl: 'assets/Lentils.jpeg' 
  }];

  review: any[] = [];

  onChange($event: any) {
    this.optionSelected = $event.value;
  }

  allowDrop = (drag: any, drop: any) => {
    debugger;
    if (drop.id === "includeList" && this.optionSelected === 1) {
      return true;
    } else if (drop.id === "excludeList" && this.optionSelected === 2) {
      return true;
    } else if (drop.id === "fruitList" && this.optionSelected === 3) {
      return true;
    } else {
      return false;
    }
  };

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      width: '500px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.all.push(result);
      }
    });
  }

  deleteItem(item: any, arrayName: string) {
    let targetArray: any[];
    switch (arrayName) {
      case 'all':
        targetArray = this.all;
        break;
      case 'todo':
        targetArray = this.todo;
        break;
      case 'done':
        targetArray = this.done;
        break;
      case 'review':
        targetArray = this.review;
        break;
      default:
        // Handle invalid array name
        console.error('Invalid array name:', arrayName);
        return;
    }
  
    const index = targetArray.indexOf(item);
    if (index !== -1) {
      targetArray.splice(index, 1); // Remove the item from the target array
    }
  }
  
  
  
}
