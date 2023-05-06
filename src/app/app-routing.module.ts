// @ts-ignore

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./User/login/login.component";
import {RegisterComponent} from "./User/register/register.component";
import {ListCategorieComponent} from "./categorie/list-categorie/list-categorie.component";

const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'register', component: RegisterComponent},
  {path: 'categories', component: ListCategorieComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
