import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() item: any;
  @Output() delete = new EventEmitter<any>();

  onDeleteClick() {
    this.delete.emit(this.item);
  }
}
