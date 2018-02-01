import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

import { SMNUIModule } from 'ng-smn-ui';
import { AppRoutingModule } from '../app-routing.module';

import { UsuarioService } from './usuario.service';


@NgModule({
  declarations: [
    UsuarioListarComponent, 
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SMNUIModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  exports: [
    UsuarioListarComponent, 
    UsuarioFormComponent  
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ UsuarioService ]
})
export class UsuarioModule { }
