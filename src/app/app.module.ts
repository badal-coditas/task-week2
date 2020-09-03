import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserHttpService } from './user-http/user-http.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ProductListsComponent } from './components/product-lists/product-lists.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { CardsComponent } from './components/cards/cards.component'
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HeaderComponent,
    ProductListsComponent,
    ProductSidebarComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
