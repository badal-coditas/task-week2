import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ProductListsComponent } from './components/product-lists/product-lists.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  {
    path: 'home', component: ProductListsComponent, children: [
      { path: 'add-product', component: AddProductComponent },
      { path: '', component: CardsComponent },
      { path: 'edit-product', component: EditProductComponent }
    ]
  },
  { path: 'register', component: UserRegisterComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
