import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent {

  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  itemsShowCount = 12;
  sort = 'desc';

  constructor() {}

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

  onItemsUpdated(count: number): void {
    this.itemsCountChange.emit(count);
    this.itemsShowCount = count;
  }

  onSortUpdated(newSort: string): void {
    this.sortChange.emit(newSort);
    this.sort = newSort;
  }

}
