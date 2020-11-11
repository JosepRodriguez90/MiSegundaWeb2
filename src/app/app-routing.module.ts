import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EventoComponent } from './components/eventos/eventos.component';


const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'inicio', component: InicioComponent },
{ path: 'eventos', component: EventoComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
