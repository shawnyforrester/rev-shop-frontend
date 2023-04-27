import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {Stripe} from 'stripe';
import { CartServicesService } from 'src/app/services/cart-services.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  amount: number;
  stripeHandler: any;

  constructor(private http: HttpClient, private cartService: CartServicesService) {
    this.amount = 0;
  }

  ngOnInit() {
    console.log('Initializing stripeHandler...');
    this.stripeHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MxvVLEeeBC45BVWD8463UJ0IzZFkBowrLh7NzpMCOT9PMSbcqwgC7srvsW62BjWRdENtSTq8Plri6gw2qGiiSOX00Y9deQbJP',
      locale: 'auto',
      token: (token: any) => {
        this.processPayment(token);
      }
    });

    this.updateAmount();
  }

  processPayment(token: any) {
    const amount = this.amount * 100;
    return this.http.post('http://ec2-35-84-46-133.us-west-2.compute.amazonaws.com:9000/payments/charge', { token: token.id, amount: amount }).subscribe(response => {
      console.log(response);
      alert('Payment has been successful!');
    }, error => {
      console.log(error);
      alert('Payment failed: ' + error.error.message);
    });
  }

  handlePayment() {
    this.updateAmount();
    console.log(this.stripeHandler);
    this.stripeHandler.open({
      name: 'Mens Clothing Store',
      description: 'Billing Details',
      amount: this.amount * 100
    });
  }

  updateAmount() {
    this.cartService.getTotalCost().subscribe(totalCost => {
      this.amount = totalCost;
    });
  }
}