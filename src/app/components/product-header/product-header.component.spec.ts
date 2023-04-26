import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductHeaderComponent } from './product-header.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

describe('ProductHeaderComponent', () => {
  let component: ProductHeaderComponent;
  let fixture: ComponentFixture<ProductHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        MatSnackBarModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule
      ],
      declarations: [ ProductHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
