import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct: Product = {
    id: 0,
    title: '',
    price: 0,
    category: '',
    description_and_reviews: '',
    image: '',
    size: ''
  };

  constructor(private storeService: StoreService, private snackBar: MatSnackBar) { }

  addProduct() {
    this.storeService.addProduct(this.newProduct)
      .subscribe(
        product => {
          console.log('Added product:', product);
          
          this.newProduct = {
            id: 0,
            title: '',
            price: 0,
            category: '',
            description_and_reviews: '',
            image: '',
            size: ''
          };
          
          this.snackBar.open('Product successfully added', 'Close', {
            duration: 2000
          });
        },
        error => {
          console.log('Error adding product:', error);
        }
      );
  }
}

