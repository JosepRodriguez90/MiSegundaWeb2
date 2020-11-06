import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EventosComponent } from './components/eventos/eventos.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'inicio', component: InicioComponent },
{ path: 'eventos', component: EventosComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
