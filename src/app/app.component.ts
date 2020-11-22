import { Component } from '@angular/core';
import { EventomodelComponent } from 'src/app/components/eventomodel/eventomodel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiSegundaWeb2';

  charactersArray: EventomodelComponent[] = [];
  isCreatingEvento: boolean = false;
  characterSelected: EventomodelComponent = null;

  selectCharacter(character: EventomodelComponent): void {

    // Quitamos la interfaz de crear un personaje
    this.isCreatingEvento = false;

    // Guardamos en una variable de la clase el personaje seleccionado
    this.characterSelected = character;
  }

  addCharacter(newCharacter: EventomodelComponent): void {
    this.charactersArray.push(newCharacter);
  }
}
