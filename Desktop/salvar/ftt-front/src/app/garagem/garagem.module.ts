import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisService } from 'src/app/pais/pais.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { GaragemListComponent } from 'src/app/garagem/garagem-list/garagem-list.component';
import { GaragemFormComponent } from 'src/app/garagem/garagem-form/garagem-form.component';
import { GaragemRoutingModule } from 'src/app/garagem/garagem-routing.module';
import { GaragemService } from 'src/app/garagem/garagem.service';


@NgModule({
  declarations: [GaragemListComponent, GaragemFormComponent, ],
  imports: [
    CommonModule,
    GaragemRoutingModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  providers: [GaragemService]
})
export class GaragemModule { }