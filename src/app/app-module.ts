import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Hello } from './hello/hello';
import { Header } from './header/header';
import { TopHeader } from './top-header/top-header';
import { TopMenu } from './header/top-menu/top-menu';
import { MainMenu } from './header/main-menu/main-menu';
import { Container } from './container/container';
import { Counter } from './counter/counter';
import { Welcome } from './welcome/welcome';
import { ImageToggle } from './image-toggle/image-toggle';
import { Search } from './container/search/search';
import { FormsModule } from '@angular/forms';
import { Registration } from './registration/registration';
import { ProductList } from './container/product-list/product-list';
import { UserList } from './user-list/user-list';
import { Product } from './container/product-list/product/product';
import { EmployeeList } from './employee-list/employee-list';
import { Employee } from './employee-list/employee/employee';
import { Filter } from './container/product-list/filter/filter';
import { BookData } from './book-data/book-data';
import { BookList } from './book-data/book-list/book-list';
import { EmployeeSearch } from './employee-search/employee-search';
import { EmployeeViewchildren } from './employee-viewchildren/employee-viewchildren';
import { UserProfile } from './user-profile/user-profile';
import { Skill } from './user-profile/skill/skill';
import { EmployeeProfile } from './employee-profile/employee-profile';
import { Project } from './employee-profile/project/project';
import { Chat } from './chat/chat';
import { Tooltip } from './tooltip';
import { ProductDetails } from './container/product-details/product-details';
import { SetBackground } from './customDirectives/set-background';
import { ProductComponent } from './product-component/product-component';
import { HoverEffect } from './customDirectives/hover-effect';
import { Highlights } from './highlights';
import { Highlight } from './customDirectives/highlight';
import { Hover } from './customDirectives/hover';
import { RoleBased } from './customDirectives/role-based';
import { UserRole } from './user-role/user-role';
import { BookSearch } from './book-search/book-search';

@NgModule({
  declarations: [
    App,
    Hello,
    Header,
    TopHeader,
    TopMenu,
    MainMenu,
    Container,
    Counter,
    Welcome,
    ImageToggle,
    Search,
    Registration,
    ProductList,
    UserList,
    Product,
    EmployeeList,
    Employee,
    Filter,
    BookData,
    BookList,
    EmployeeSearch,
    EmployeeViewchildren,
    UserProfile,
    Skill,
    EmployeeProfile,
    Project,
    Chat,
    Highlights,
    Tooltip,
    ProductDetails,
    SetBackground,
    ProductComponent,
    Highlight,
    HoverEffect,
    Hover,
    RoleBased,
    UserRole,
    BookSearch,
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
