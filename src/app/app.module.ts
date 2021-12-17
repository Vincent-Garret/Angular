import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsPropertyComponent } from './component/details-property/details-property.component';
import { HttpClientModule } from '@angular/common/http';
import { ListPropertyComponent } from './component/list-property/list-property.component';
import { HeaderComponent } from './component/header/header.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { DetailUserComponent } from './component/detail-user/detail-user.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AddPropertyComponent } from './component/add-property/add-property.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { ListCategoryComponent } from './component/list-category/list-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPropertyComponent,
    DetailsPropertyComponent,
    HeaderComponent,
    ListUserComponent,
    DetailUserComponent,
    LoginComponent,
    AddUserComponent,
    AddPropertyComponent,
    AddCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
