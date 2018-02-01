import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { NavbarComponent } from '../../navbar/navbar.component';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  usuario: any = {};

  constructor(
    private navComponent: NavbarComponent,
    private service: UsuarioService,
    private snackbar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.navComponent.setTitle('Alterar Usuario');
        this.service.buscar(params.id).subscribe((data: any) => {
          this.usuario = data;
        });
      }
      else {
        this.navComponent.setTitle('Cadastrar Usuario');
      }
    });
  }

  onSubmit() {
    if (this.usuario.id) {
      this.service.alterar(this.usuario).then((res: any) => {
        this.snackbar.open(res.message, 'Fechar', { duration: 3000 });
      }).catch((res: any) => {
        this.snackbar.open('Ocorreu um erro no servidor.', 'Fechar', { duration: 3000 });
      });
    }
    else {
      this.service.inserir(this.usuario).then((res: any) => {
        this.snackbar.open(res.message, 'Fechar', { duration: 3000 });
        this.usuario = {};
      }).catch((res: any) => {
        this.snackbar.open('Ocorreu um erro no servidor.', 'Fechar', { duration: 3000 });
      });
    }
  }

}
