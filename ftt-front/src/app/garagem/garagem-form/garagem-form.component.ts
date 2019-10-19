import { Component, OnInit } from '@angular/core';

import { Garagem } from 'src/app/garagem/garagem';
import { FormGroup, Validators } from '@angular/forms';
import { GaragemService } from 'src/app/garagem/garagem.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PaisService } from 'src/app/pais/pais.service';
import { Pais } from 'src/app/pais/pais';

import Validation from 'src/app/core/util/validation';
               
@Component({
  selector: 'app-garagem-form',
  templateUrl: './garagem-form.component.html',
  styleUrls: ['./garagem-form.component.css']
})
export class GaragemFormComponent implements OnInit {

  // declarando variaveis
  garagem: Garagem;
  paises: Pais[];
  garagemForm: FormGroup;
  titulo: string;
  
  constructor(private garagemService: GaragemService,
              private paisService: PaisService,
              private builder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    // instacia nova garagem
    this.garagem = new Garagem();

    //obter o ID pela URL
    this.garagem.id = this.route.snapshot.params['id'];

    //Titulo da pagina
    this.titulo = (this.garagem.id) ? 'Editar':'Cadastrar';

    //Reactve Forms
    this.garagemForm = this.builder.group({
      id:[],
      nome: ['', Validators.required],
      endereco: this.builder.group({
        id: [],
        logradouro: ['',Validators.required],
        complemento: ['',Validators.required],
        bairro: ['',Validators.required],
        cidade: ['',Validators.required],
        estado: ['',Validators.required],
        pais: ['',Validators.required]
      })
    },{});
    // Não entendi 
    //Busco a garagem caso o formulario de editar ou visualizar 
    if(this.garagem.id){
      this.garagemService.findById(this.garagem.id)
      .subscribe(garagem => {
        this.garagemForm.patchValue(garagem)
      });
    }
    //Caso seja o formulario de visualizar
    if(this.route.snapshot.url[0].path == 'visualizar'){
      //Desabilitar o formulario
      this.garagemForm.disable();

      //Alterar o titulo da pagina
      this.titulo = 'Visualizar';
    }
    //Busca lista de paises
    this.paisService.findAll()
    .subscribe( paises => this.paises = paises);
  }

  compareFn(c1, c2): boolean{
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  //Salva dados de garagem
  onSave(garagem: Garagem){
    if(this.garagemForm.invalid){
      //Valida todos os campos do formulario
      Validation.allFormFields(this.garagemForm);
    }else {
      this.garagemService.save(garagem)
      .subscribe(garagem => {
        console.log("Garagem salva!!!");

        //Redireciona para a lista de garagem
        this.router.navigate(['/garagem']);
      });
    }
  } 
}
