import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { AltaEventoComponent } from './components/alta-evento/alta-evento.component';
import { ModificarEventoComponent } from './components/modificar-evento/modificar-evento.component';
import { EliminarEventoComponent } from './components/eliminar-evento/eliminar-evento.component';


const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'inicio', component: InicioComponent },
{ path: 'eventos', component: EventosComponent },
{ path: 'alta-evento', component: AltaEventoComponent },
{ path: 'modificar-evento', component: ModificarEventoComponent },
{ path: 'eliminar-evento', component: EliminarEventoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
