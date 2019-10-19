import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisListComponent } from 'src/app/pais/pais-list/pais-list.component';
import { PaisFormComponent } from 'src/app/pais/pais-form/pais-form.component';

const routes: Routes = [

  {path: '', component: PaisListComponent},
  {path: 'novo', component: PaisFormComponent},
  {path: 'editar/:id', component: PaisFormComponent},
  {path: 'visualizar/:id', component: PaisFormComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }
