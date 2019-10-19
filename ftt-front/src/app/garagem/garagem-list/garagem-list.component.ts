import { Component, OnInit } from '@angular/core';
import { Garagem } from 'src/app/garagem/garagem';
import { GaragemService } from 'src/app/garagem/garagem.service';

@Component({
  selector: 'app-garagem-list',
  templateUrl: './garagem-list.component.html',
  styleUrls: ['./garagem-list.component.css']
})
export class GaragemListComponent implements OnInit {

  //Declarações de variaveis
  garagens: Garagem[];

  constructor(private garagemService: GaragemService) { }

  ngOnInit() {
    this.garagemService.findAll()
    .subscribe(garagens => this.garagens = garagens);
  }

  onDelete(id: number) {
    this.garagemService.deleteById(id)
    .subscribe(() => {
      console.log("Garagem deletada!!!");
      //Remove a garagem da lista
      this.garagens = this.garagens.filter(garagem => garagem.id !== id);
    });
  }
}
