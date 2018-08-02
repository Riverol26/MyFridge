import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemComponent } from './components/ShoppingList/item/item.component';
import { ShoppingListComponent } from './components/ShoppingList/shopping-list/shopping-list.component';

import { AppRoutingModule, RoutedComponents } from './routes/app.routes';
import { AddItemFormComponent } from './components/ShoppingList/add-item-form/add-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    ShoppingListComponent,
    RoutedComponents,
    AddItemFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
