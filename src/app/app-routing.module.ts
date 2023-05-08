// @ts-ignore

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./User/login/login.component";
import {RegisterComponent} from "./User/register/register.component";
import {ListCategorieComponent} from "./categorie/list-categorie/list-categorie.component";
import {ListloisirComponent} from "./Loisir/listloisir/listloisir.component";
import {MenuComponent} from "./menu/menu.component";
import {AddCategorieComponent} from "./categorie/add-categorie/add-categorie.component";

const routes: Routes = [
  {path: '', component:MenuComponent,children : [
      {path: 'loisirs', component: ListloisirComponent},
      {path: 'categories', component: ListCategorieComponent},
      //{path: 'addloisirs', component: Ad},
      {path: 'addcategories', component: AddCategorieComponent},
    ]},
  {path: '', component: LoginComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
