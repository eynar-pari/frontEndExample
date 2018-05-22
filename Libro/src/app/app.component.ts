import { Component } from '@angular/core';
import { LibroService } from './services/libro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo UPB -Ingenieria De Software!';
  data_name:any;
  data_id:any;
  data_autor:any;
  estados:any=[];

  constructor(private serviciod: LibroService)
  {
    //this.serviciod.getLibros();
  }
  ngOnInit(){
    //this.serviciod.getLibros();
    //this.serviciod.postLibros("")

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
}
