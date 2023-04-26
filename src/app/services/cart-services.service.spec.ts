import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CartServicesService } from './cart-services.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('CartServicesService', () => {
  let service: CartServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        MatSnackBarModule
        
      ]
    });
    service = TestBed.inject(CartServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
