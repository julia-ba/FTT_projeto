import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { PaisListComponent } from './pais-list/pais-list.component';
import { PaisService } from 'src/app/pais/pais.service';
import { PaisFormComponent } from './pais-form/pais-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [PaisListComponent, PaisFormComponent, ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [PaisService]
})
export class PaisModule { }