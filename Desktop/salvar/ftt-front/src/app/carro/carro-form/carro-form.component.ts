import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/carro/carro';
import { Garagem } from 'src/app/garagem/garagem';
import { FormGroup } from '@angular/forms';
import { GaragemService } from 'src/app/garagem/garagem.service';
import { CarroService } from 'src/app/carro/carro.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import Validation from 'src/app/core/util/validation';

@Component({
  selector: 'app-carro-form',
  templateUrl: './carro-form.component.html',
  styleUrls: ['./carro-form.component.css']
})
export class CarroFormComponent implements OnInit {

  //declarando variaveis
  carro: Carro;
  garagens: Garagem[];
  carroForm: FormGroup;
  titulo: string;

  constructor(private carroService: CarroService,
              private garagemService: GaragemService,
              private builder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //instancia novo carro
    this.carro = new Carro();

    //Obter o ID pela URL
    this.carro.id = this.route.snapshot.params['id'];

    //Titulo da pagina
    this.titulo = (this.carro.id) ? 'Editar':'Cadastrar';

    //Reactive Forms
    this.carroForm = this.builder.group({
      id:[],
      fabricante: ['', Validators.required],
      modelo: ['', Validators.required],
      versao: ['', Validators.required],
      descricao: ['', Validators.required],
      cor: ['', Validators.required],
      valor: ['', Validators.required],
      garagem: ['', Validators.required]
    },{});
    //Busco a carro caso o formulario de editar ou visualizar 
    if(this.carro.id){
      this.carroService.findById(this.carro.id)
      .subscribe(carro => {
        this.carroForm.patchValue(carro)
      });
    }
     //Caso seja o formulario de visualizar
     if(this.route.snapshot.url[0].path == 'visualizar'){
      //Desabilitar o formulario
      this.carroForm.disable();

      //Alterar o titulo da pagina
      this.titulo = 'Visualizar';
    }
    //Busca lista de garagens
    this.garagemService.findAll()
    .subscribe( garagens => this.garagens = garagens);

  }

  compareFn(c1, c2): boolean{
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  //Salva dados de garagem
  onSave(carro: Carro){
    if(this.carroForm.invalid){
      //Valida todos os campos do formulario
      Validation.allFormFields(this.carroForm);
    }else {
      this.carroService.save(carro)
      .subscribe(carro => {
        console.log("carro salvo!!!");

        //Redireciona para a lista de garagem
        this.router.navigate(['/carro']);
      });
    }
  }
}
