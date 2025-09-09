import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Hello } from './hello/hello';
import { Header } from './header/header';
import { TopHeader } from './top-header/top-header';
import { TopMenu } from './header/top-menu/top-menu';
import { MainMenu } from './header/main-menu/main-menu';

@NgModule({
  declarations: [
    App,
    Hello,
    Header,
    TopHeader,
    TopMenu,
    MainMenu,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
