import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  UsuarioListComponent } from 'src/app/usuario/usuario-list/usuario-list.component';
import {  UsuarioFormComponent } from 'src/app/usuario/usuario-form/usuario-form.component';
import { UsuarioVisualizarComponent } from './usuario-visualizar/usuario-visualizar.component';

const routes: Routes = [
  //o app-routing, vai vim aq ver qual component tá sendo chamado, pra mostra na tela 
  {path: '', component:  UsuarioListComponent}, // /usuario, lista de usuários
  {path: 'novo', component:  UsuarioFormComponent},// /usuario/novo, formulário de cadastro
  {path: 'editar/:id', component:  UsuarioFormComponent},// /usuario/editar/id, formulario para edição
  {path: 'visualizar/:id', component:  UsuarioVisualizarComponent}// //pagina q a gente te q criar pra mostra as infos
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  UsuarioRoutingModule { }