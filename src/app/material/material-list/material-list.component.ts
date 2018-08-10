import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  
  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  constructor() { }

  ngOnInit() {
    console.log("Inicio el componente");
    this.estudiante1= {
      id: 1,
      nombre: 'Alferdo',
      ciudad: 'Comitan',
      fotoUrl: 'https:www.pagina.com/foto.jpg'
    };
    this.estudiante2= {
      id: 2,
      nombre: 'Pepe',
      ciudad: 'Comitan'
    };
    this.estudiante3= {
      id: 3,
      nombre: 'Maria',
      ciudad: 'Comitan'
    };

    setTimeout(() => {
      this.estudiante3 = {
        id: 3,
        nombre: 'Maria Guzman',
        ciudad: 'Trinitaria'
      }
    }, 3000)
  }

  

}
