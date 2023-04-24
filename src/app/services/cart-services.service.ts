import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../Models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  cart = new BehaviorSubject<Cart>({ items: [] });
  totalCost = new BehaviorSubject<number>(0);
  cartKey = 'cart';

  constructor(private _snackBar: MatSnackBar) {
    const cartData = localStorage.getItem(this.cartKey);
    if (cartData) {
      this.cart.next(JSON.parse(cartData));
    }
    this.cart.subscribe(cart => {
      this.totalCost.next(this.getTotal(cart.items));
      localStorage.setItem(this.cartKey, JSON.stringify(cart));
    });
  }


  /**This method adds items to the cart */
  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });

  }

  /**This method removes items from the cart */
  removeFromCart(item: CartItem, updateCart = true): CartItem[] {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    if (updateCart) {
      this.cart.next({ items: filteredItems });
      this._snackBar.open('1 item removed from cart.', 'Ok', {
        duration: 3000,
      });
    }

    return filteredItems;
  }



  /**This method adjusts the quantity of items in the cart */
  removeQuantity(item: CartItem): void {
    let itemForRemoval!: CartItem;

    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItems });
    this._snackBar.open('1 item removed from cart.', 'Ok', {
      duration: 3000,
    });
  }

  /**This method clears the cart of all items */
  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('Cart is cleared.', 'Ok', {
      duration: 3000,
    });
  }

  /**This method returns the total cost of items in the cart */

  getTotal(items: CartItem[]): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  getItems() {
    return this.cart.value.items;
  }

    getTotalCost(): Observable<number> {
    return this.totalCost.asObservable();
  }

  
}
