import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/Models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  products: Product[] = [];
  title: string = '';

  constructor(private storeService: StoreService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.storeService.getAllProducts().subscribe(
      products => this.products = products,
      error => console.log(error)
    );
  }

  deleteItem() {
    console.log(this.title);
    this.storeService.deleteProductByTitle(this.title).subscribe(
      response => {
        console.log(response);
        this.getProductList();
        this.snackBar.open('Item successfully deleted', 'Close', {
          duration: 2000
        });
      },
      error => console.log(error),
      
    );
  }
}
