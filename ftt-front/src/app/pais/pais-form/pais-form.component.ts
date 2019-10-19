import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/pais/pais';
import { FormGroup } from '@angular/forms';
import { PaisService } from 'src/app/pais/pais.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import Validation from 'src/app/core/util/validation';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent implements OnInit {
  // declarando variaveis
  pais: Pais;
  paisForm: FormGroup;
  titulo: string;

  constructor(private paisService: PaisService,
              private builder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    //instacia novo pais
    this.pais = new Pais();

    //obter o ID pela url
    this.pais.id = this.route.snapshot.params['id'];

    //Define valor do titulo
    this.titulo = (this.pais.id) ? 'Editar' : 'Cadastrar';

    //Reactive forms
    this.paisForm = this.builder.group({
      id: [],
      nome: ['', Validators.required]
    },{})
    // Busca os dados do pais caso seja o formulario de editar
    if(this.pais.id){
      this.paisService.findById(this.pais.id)
      .subscribe(pais => this.paisForm.patchValue(pais));
    }
    // Desabilitar todos os campos do formulario caso seja visualizar
    if(this.route.snapshot.url[0].path == 'visualizar'){
      //Desabilita o formulario
      this.paisForm.disable();
      //Altera o titulo da pagina  
      this.titulo = 'Visualizar';
    }
  }

  onSave(pais: Pais){
    if(this.paisForm.invalid){
      Validation.allFormFields(this.paisForm);
    } else{
      this.paisService.save(pais)
      .subscribe(pais =>{
        console.log("Pais Salvo");
    
        //Redireciona para a lista de paises
        this.router.navigate(['/pais']);

      });
    }
  }

}
