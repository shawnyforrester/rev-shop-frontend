import { TestBed } from '@angular/core/testing';

import { CartServicesService } from './cart-services.service';

describe('CartServicesService', () => {
  let service: CartServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
