import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { httpInterceptorProviders } from 'src/helpers/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { CartComponent } from './components/cart/cart.component';
import { AppComponent } from './app.component';
import { CartServicesService } from './services/cart-services.service';
import { StoreService } from './services/store.service';
import { PaymentComponent } from './components/payment/payment.component';
import { AboutComponent } from './pages/about/about.component';
import { DeleteComponent } from './components/delete/delete.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RouteGuardGuard } from './route-guard.guard';
//import { StripeModule } from "stripe-angular";




@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    ProductsPageComponent,
    ProfileComponent, 
    ProductHeaderComponent,
    FilterComponent,
    ProductBoxComponent,
    CartComponent,
    PaymentComponent,
    AboutComponent,
    DeleteComponent,
    AddProductComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatExpansionModule,
    MatSnackBarModule,
    
  ],
  providers: [httpInterceptorProviders, CartServicesService, 
    StoreService, RouteGuardGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
