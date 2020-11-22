import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventomodelComponent } from 'src/app/components/eventomodel/eventomodel.component';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventoComponent implements OnInit {

  newEventomodel: EventomodelComponent = null;
  AruedaEmail ='@';
  mostrarInfo="";
  users: string[] = [];

  @Output() characterEvent: EventEmitter<EventomodelComponent> = new EventEmitter<EventomodelComponent>();

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
 
  onFormSubmit(itemForm: any): void {


    this.newEventomodel = new EventomodelComponent(itemForm.controls.name.value,
                                      itemForm.controls.localidad.value,
                                      itemForm.controls.email.value,
                                      itemForm.controls.descripcion.value,);

    console.log(this.newEventomodel);


    this.characterEvent.emit(this.newEventomodel);
  }

  ngOnInit(): void {
  }


}
