import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventoComponent implements OnInit {

  AruedaEmail ='@';
  mostrarInfo="";
  users: string[] = [];

  addUser(vName, vEmail, vLocalidad, vDescripcion) {
    this.users.push(vName.value);
    this.users.push(vEmail.value);
    this.users.push(vLocalidad.value);
    this.users.push(vDescripcion.value);

    return false;
  }

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
 

  deleteUser(user) {

    this.users
    for(let i=0; i < this.users.length; i++) {
      if(user == this.users[i]){
        this.users.splice(i, 1);
      }
    }
  }

  ngOnInit(): void {
  }

}
