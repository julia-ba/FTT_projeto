import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { CarroListComponent } from 'src/app/carro/carro-list/carro-list.component';
import { CarroFormComponent } from 'src/app/carro/carro-form/carro-form.component';
import { CarroRoutingModule } from 'src/app/carro/carro-routing.module';
import { CarroService } from 'src/app/carro/carro.service';


@NgModule({
  declarations: [CarroListComponent, CarroFormComponent ],
  imports: [
    CommonModule,
    CarroRoutingModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [CarroService]
})
export class CarroModule { }