import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AltaEventoComponent } from './components/alta-evento/alta-evento.component';
import { ModificarEventoComponent } from './components/modificar-evento/modificar-evento.component';
import { EliminarEventoComponent } from './components/eliminar-evento/eliminar-evento.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    EventosComponent,
    MainMenuComponent,
    AltaEventoComponent,
    ModificarEventoComponent,
    EliminarEventoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
