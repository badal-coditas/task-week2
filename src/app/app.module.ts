import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserHttpService } from './user-http/user-http.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CardEffect } from './components/cards/store/card.effects';

import { HeaderComponent } from './components/header/header.component';
import { ProductListsComponent } from './components/product-lists/product-lists.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { CardsComponent } from './components/cards/cards.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ComponentReducer } from './components/store/component.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { cardReducer } from './components/cards/store/card.reducer';

import { IndividualCard } from './components/cards/card-lit-element/individual-card';
import { ListButtonElement } from './components/edit-product/edit-list-lit-element/list-button';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HeaderComponent,
    ProductListsComponent,
    ProductSidebarComponent,
    CardsComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      reducer: cardReducer,
      componetReducer: ComponentReducer,
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CardEffect]),
  ],
  providers: [UserHttpService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [IndividualCard, ListButtonElement],
})
export class AppModule {}
