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
    
    <br>  Datos Libro  <br>
      <br>Libro Name : {{dataTest.name}}
      <br>Libro Id : {{dataTest.id}}
      <br>Libro Autor:  {{dataTest.autor}}
    </div>
     `

})

export class LibroComponent implements OnInit{
  data_name:any;
  data_id:any;
  data_autor:any;
  librosData:any=[];
  dataTest:any=[];
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
        this.librosData.push(estado);
      });

  }

  ngOnInit(){
    this.cargar();
  }

  cargar():void{
    console.log('init ');
    this.serviciod.getLibros2().subscribe(
      res => {
        console.log(res);
        console.log('data response body'+res['_body']);
        this.dataTest = JSON.parse(res['_body']);
        console.log('body '+this.dataTest);
      }
    );
    console.log('final ');
  }
}

