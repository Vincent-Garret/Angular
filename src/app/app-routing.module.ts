import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPropertyComponent } from './component/list-property/list-property.component';
import { DetailsPropertyComponent } from './component/details-property/details-property.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { DetailUserComponent } from './component/detail-user/detail-user.component';
import { LoginComponent } from './component/login/login.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AddPropertyComponent } from './component/add-property/add-property.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { ListCategoryComponent } from './component/list-category/list-category.component';


const routes: Routes = [
  {'path': '', 'component': ListPropertyComponent},
  {'path': 'details/:id', 'component' : DetailsPropertyComponent},
  {'path': 'users', component: ListUserComponent},
  {'path': 'details/users/:id', component : DetailUserComponent},
  {'path' : 'categories', component: ListCategoryComponent},
  {'path': 'login', component: LoginComponent},
  {'path': 'users/add', component: AddUserComponent},
  {'path': 'properties/add', component: AddPropertyComponent},
  {'path': 'categories/add', component: AddCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
