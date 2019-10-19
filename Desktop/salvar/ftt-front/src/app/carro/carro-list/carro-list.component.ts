import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/carro/carro';
import { CarroService } from 'src/app/carro/carro.service';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css']
})
export class CarroListComponent implements OnInit {

  carros: Carro[];

  constructor(private carroService: CarroService) { }

  ngOnInit() {
    this.carroService.findAll()
    .subscribe( carros => this.carros = carros);
  }

  onDelete(id: number) {
    this.carroService.deleteById(id)
    .subscribe(() => {
      console.log("Carro deletado!!!");
      //Remove carro da lista
      this.carros = this.carros.filter(carro => carro.id !== id);
    });
  }
}
