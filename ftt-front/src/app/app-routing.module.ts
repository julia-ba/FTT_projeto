import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { UsuarioComponent } from 'src/app/usuario/usuario.component';

const router: Routes =[
  {path: 'usuario', component: UsuarioComponent},
  {path: 'garagem', loadChildren: './garagem/garagem.module#GaragemModule'},
  {path: 'carro', loadChildren: './carro/carro.module#CarroModule'},
  {path: '', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
