import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Hello } from './hello/hello';
import { Header } from './header/header';
import { TopHeader } from './top-header/top-header';
import { TopMenu } from './header/top-menu/top-menu';
import { MainMenu } from './header/main-menu/main-menu';
import { ProductList } from './product-list/product-list';
import { Counter } from './counter/counter';
import { Welcome } from './welcome/welcome';
import { ImageToggle } from './image-toggle/image-toggle';
import { Search } from './product-list/search/search';
import { FormsModule } from '@angular/forms';
import { Registration } from './registration/registration';

@NgModule({
  declarations: [
    App,
    Hello,
    Header,
    TopHeader,
    TopMenu,
    MainMenu,
    ProductList,
    Counter,
    Welcome,
    ImageToggle,
    Search,
    Registration,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
