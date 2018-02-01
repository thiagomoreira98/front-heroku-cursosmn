import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule, MatExpansionModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SMNUIModule } from 'ng-smn-ui';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule,
    SMNUIModule,
    AppRoutingModule,
    UsuarioModule
  ],
  exports: [
    NavbarComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
