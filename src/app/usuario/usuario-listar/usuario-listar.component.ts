import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { NavbarComponent } from '../../navbar/navbar.component';
import { UsuarioService } from '../usuario.service';


@Component({
    selector: 'app-usuario-listar',
    templateUrl: './usuario-listar.component.html',
    styleUrls: ['./usuario-listar.component.scss']
})
export class UsuarioListarComponent implements OnInit {

    usuarios: any = [];
    filtro: any = {
        pagina: 1,
        quantidade: 10
    };
    totalPaginas: number;
    totalRegistros: number;

    constructor(
        private navComponent: NavbarComponent,
        private service: UsuarioService,
        private snackbar: MatSnackBar,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.navComponent.setTitle('Usuarios');
        this.selecionar();
    }

    selecionar() {
        this.service.selecionar(this.filtro).subscribe((data: any) => {
            this.usuarios = data.registros;
            this.totalRegistros = data.totalRegistros;
            this.totalPaginas = this.calcularTotalPaginas((this.totalRegistros / this.filtro.quantidade).toString());
        }, (res: any) => {
            this.snackbar.open('Ocorreu um erro no servidor.', 'Fechar', { duration: 3000 });
        });
    }

    proximaPagina() {
        this.filtro.pagina += 1;
        this.selecionar();
    }

    voltarPagina() {
        this.filtro.pagina -= 1;
        this.selecionar();
    }

    calcularTotalPaginas(paginas): any {
        if (paginas.length > 1)
            return parseInt(paginas) + 1;

        return parseInt(paginas);
    }

    deletar(id): any {
        this.service.deletar(id).then((res: any) => {
            this.snackbar.open(res.message, 'Fechar', { duration: 3000 });
            this.selecionar();
        }).catch((res: any) => {
            this.snackbar.open('Ocorreu um erro no servidor.', 'Fechar', { duration: 3000 });
        });
    }

}
