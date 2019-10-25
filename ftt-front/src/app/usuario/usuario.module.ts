import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { UsuarioService } from './usuario.service';
import { UsuarioRoutingModule } from './usuarrio-routing.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

@NgModule({
  declarations: [ UsuarioListComponent,  UsuarioFormComponent ],
  imports: [
    CommonModule,
     UsuarioRoutingModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [ UsuarioService]
})
export class  UsuarioModule { }