import {  Component,  EventEmitter,  OnDestroy, OnInit} from '@angular/core';
import {  Output,} from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy{

  @Output() showCategory = new EventEmitter<string>();
  categories: string[] | undefined;
  categoriesSubscription: Subscription | undefined;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService
      .getAllCategories()
      .subscribe((response: Array<string>) => {
        this.categories = response;
      });
  }

  onShowCategory(category: string): void {
    this.showCategory.next(category);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

}
