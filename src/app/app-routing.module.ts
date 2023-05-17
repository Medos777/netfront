// @ts-ignore

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./User/login/login.component";
import {RegisterComponent} from "./User/register/register.component";
import {ListCategorieComponent} from "./categorie/list-categorie/list-categorie.component";
import {ListloisirComponent} from "./Loisir/listloisir/listloisir.component";
import {MenuComponent} from "./menu/menu.component";
import {AddCategorieComponent} from "./categorie/add-categorie/add-categorie.component";
import {AddLoisirComponent} from "./Loisir/add-loisir/add-loisir.component";
import {AddStadeComponent} from "./stade/add-stade/add-stade.component";
import {ListStadeComponent} from "./stade/list-stade/list-stade.component";

const routes: Routes = [
  {path: '', component:MenuComponent,children : [
      {path: 'loisirs', component: ListloisirComponent},
      {path: 'categories', component: ListCategorieComponent},
      {path: 'addloisirs', component: AddLoisirComponent},
      {path: 'addcategories', component: AddCategorieComponent},
      {path: 'addstades', component: AddStadeComponent},
      {path: 'stades', component: ListStadeComponent},
    ]},
  {path: 'login', component: LoginComponent},{path: 'register', component: RegisterComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
