import { Component, Input, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { StorageServiceService } from './services/storage-service.service';
import { AuthServiceService } from './services/auth-service.service';
import { Cart, CartItem } from './Models/cart.model';
import { CartServicesService } from './services/cart-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**This is the cart which is inialized as an array of items */
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  /**Input data received from from a parent component*/
  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    /**The number of items in the cart is set here */
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }

  title = 'rev-shop-frontend';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showRetailerBoard = false;
  username?: string;

  constructor(private storageService: StorageServiceService, 
    private router: Router, private authService: AuthServiceService,
    private cartService: CartServicesService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles.push(user.role);

      this.showAdminBoard = this.roles.includes('admin');
      this.showRetailerBoard = this.roles.includes('retailer');

      this.username = user.username;
    }

  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        localStorage.clear();
        
      },
      error: err => {
        console.log(err);
      }
    });
  }

  
  /** Gets the total number of items from the cart service*/
  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  
  /**clears the cart */
  onClearCart(): void {
    this.cartService.clearCart();
  }
}
