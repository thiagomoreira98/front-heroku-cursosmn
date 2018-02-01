import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'usuarios', component: UsuarioListarComponent },
  { path: 'usuario/novo', component: UsuarioFormComponent },
  { path: 'usuario/:id', component: UsuarioFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
