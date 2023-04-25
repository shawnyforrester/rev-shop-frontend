export interface Cart {
    items: Array<CartItem>;
  }
  
  export interface CartItem {
    type: string;
    size: string;
    price: number;
    quantity: number;
    id: number;
    image: string
  }