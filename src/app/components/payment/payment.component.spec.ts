// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientModule } from '@angular/common/http';
// import { PaymentComponent } from './payment.component';
// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// describe('PaymentComponent', () => {
//   let component: PaymentComponent;
//   let fixture: ComponentFixture<PaymentComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports:[
//         HttpClientModule,
//         MatSnackBarModule
//       ],
//       declarations: [ PaymentComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(PaymentComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     const stripeCheckoutScript = document.createElement('script');
//     stripeCheckoutScript.src = 'https://checkout.stripe.com/checkout.js';
//     document.body.appendChild(stripeCheckoutScript);
//     await new Promise(resolve => stripeCheckoutScript.onload = resolve);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
