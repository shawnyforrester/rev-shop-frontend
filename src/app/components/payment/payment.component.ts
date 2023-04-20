import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  amount: number;
  stripeHandler: any;

  constructor(private http: HttpClient) {
    this.amount = 0;
  }

  ngOnInit() {
    this.stripeHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MxvVLEeeBC45BVWD8463UJ0IzZFkBowrLh7NzpMCOT9PMSbcqwgC7srvsW62BjWRdENtSTq8Plri6gw2qGiiSOX00Y9deQbJP',
      locale: 'auto',
      token: (token: any) => {
        this.processPayment(token);
      }
    });
  }

processPayment(token: any) {
    const amount = this.amount * 100;
    console.log(token);
    console.log(amount);
    return this.http.post('http://localhost:9000/payments/charge', { token: token.id, amount: amount }).subscribe(response => {
      console.log(response);
      alert('Payment has been successful!');
    }, error => {
      console.log(error);
      alert('Payment failed: ' + error.error.message);
    });
}

  handlePayment() {
    this.stripeHandler.open({
      name: 'Mens Clothing Store',
      description: 'Billing Details',
      amount: this.amount * 100
    });
  }
}