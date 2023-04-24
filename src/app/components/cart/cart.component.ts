import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/Models/cart.model';
import { Cart } from 'src/app/Models/cart.model';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{

  cart: Cart = { items: [] };

  displayedColumns: string[] = [
    // 'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  dataSource: CartItem[] = [];
  
  cartSubscription: Subscription | undefined;

  constructor(private cartService: CartServicesService, private http: HttpClient) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
     this.dataSource = _cart.items.map((item: CartItem) => {
        const product = this.http.get(item.type); // Assuming that 'type' is the URL of the product's image.
        return {
          ...item,
          name: item.type, // Replace with the actual name of the product.
          image: item.image // Replace with the actual image of the product.
        }
      });
    }
  )}


  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onCheckout(): void {
    this.http
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe('your token');
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  

}
