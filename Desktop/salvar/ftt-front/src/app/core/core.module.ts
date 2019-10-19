import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from 'src/app/core/field/field.component';

@NgModule({
  declarations: [FieldComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FieldComponent
  ]
})
export class CoreModule { }
