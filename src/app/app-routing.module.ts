import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, 
  {path: 'profile', component: ProfileComponent},
  {path: 'cart', component: CartComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'add', component: AddProductComponent},
  {path: 'delete', component: DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
