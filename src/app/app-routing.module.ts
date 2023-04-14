import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ HomeComponent } from './pages/home/home.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/item/:id', component: ItemPageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'products', component: ProductsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
