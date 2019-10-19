import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GaragemListComponent } from './garagem/garagem-list/garagem-list.component';
import { GaragemFormComponent } from './garagem/garagem-form/garagem-form.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
