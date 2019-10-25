import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  UsuarioListComponent } from 'src/app/usuario/usuario-list/usuario-list.component';
import {  UsuarioFormComponent } from 'src/app/usuario/usuario-form/usuario-form.component';

const routes: Routes = [

  {path: '', component:  UsuarioListComponent},
  {path: 'novo', component:  UsuarioFormComponent},
  {path: 'editar/:id', component:  UsuarioFormComponent},
  {path: 'visualizar/:id', component:  UsuarioFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  UsuarioRoutingModule { }