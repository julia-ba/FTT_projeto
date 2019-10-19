import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroListComponent } from 'src/app/carro/carro-list/carro-list.component';
import { CarroFormComponent } from 'src/app/carro/carro-form/carro-form.component';

const routes: Routes = [

  {path: '', component: CarroListComponent},
  {path: 'novo', component: CarroFormComponent},
  {path: 'editar/:id', component: CarroFormComponent},
  {path: 'visualizar/:id', component: CarroFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarroRoutingModule { }