import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-evento',
  templateUrl: './alta-evento.component.html',
  styleUrls: ['./alta-evento.component.css']
})
export class AltaEventoComponent implements OnInit {

  AruedaEmail ='@';
  mostrarInfo="";

  constructor() { }

  Enviar(nombre, email, descripcion){

    if(nombre.value ==""){
      alert("El nombre esta vacio");
    }

    if(email.match(this.AruedaEmail)){
      this.mostrarInfo="Correcto";
    }else{
      this.mostrarInfo="Incorrecto";
    }

    if(descripcion.value.length<2){
      this.mostrarInfo="textocorto";
    }

  }

  ngOnInit(): void {
  }

}
