import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardRetailerComponent } from './components/board-retailer/board-retailer.component';
import { BoardBuyerComponent } from './components/board-buyer/board-buyer.component';
import { httpInterceptorProviders } from 'src/helpers/http.interceptor';
import { UserHomeComponent } from './components/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemPageComponent,
    NavBarComponent,
    RegistrationComponent,
    LoginComponent,
    ProductsPageComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardRetailerComponent,
    BoardBuyerComponent,
    UserHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
