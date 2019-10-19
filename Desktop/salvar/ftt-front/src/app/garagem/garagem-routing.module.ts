import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaragemListComponent } from 'src/app/garagem/garagem-list/garagem-list.component';
import { GaragemFormComponent } from 'src/app/garagem/garagem-form/garagem-form.component';

const routes: Routes = [

  {path: '', component: GaragemListComponent},
  {path: 'novo', component: GaragemFormComponent},
  {path: 'editar/:id', component: GaragemFormComponent},
  {path: 'visualizar/:id', component: GaragemFormComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaragemRoutingModule { }
