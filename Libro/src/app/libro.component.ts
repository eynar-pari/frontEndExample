import { Component, OnInit } from '@angular/core';
import { LibroService } from './services/libro.service';

@Component({
  selector: 'libroform',
  template: `
    <div class="login">
      <h1>Addicionar Libro</h1>
        Id<input type="text" [(ngModel)]="data_id" name="u" placeholder="id" required="required" />
        Name<input type="text" [(ngModel)]="data_name" name="u" placeholder="name" required="required" />
        Autor<input type="text" [(ngModel)]="data_autor" name="u" placeholder="autor" required="required" />
        <input type="button" value="crear" class="btn btn-primary btn-block btn-large" (click)="save($event)" />
      </div>`
})

export class LibroComponent implements OnInit{
  data_name:any;
  data_id:any;
  data_autor:any;
  estados:any=[];
  constructor(private serviciod: LibroService)
  {
  }

  save(event) {
    event.preventDefault();
    var newLibro={
      name: this.data_name,
      id: this.data_id,
      autor:this.data_autor
    }
    this.serviciod.postLibros(newLibro).then(estado => {
        this.estados.push(estado);
      });

  }

  ngOnInit(){
    this.cargar();
  }

  cargar():void{
  }

}

