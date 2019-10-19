import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/pais/pais';
import { PaisService } from 'src/app/pais/pais.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  // declarações de variaveis
  paises: Pais[];

  constructor(private paisService: PaisService) { }

  ngOnInit() {
    // buscar paises cadastrados no banco de dados
    this.paisService.findAll()
    .subscribe(paises => this.paises = paises);
  }

  onDelete(id: number) {
    this.paisService.deleteById(id)
    .subscribe(() => {
      console.log("Pais deletado com sucesso!");
      //remove o pais da lista
      this.paises = this.paises.filter(pais => pais.id !== id);
    });
  }
}
