import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

usuario: any = [];

  constructor(usuarioServ: UsuarioService) { 

    usuarioServ.getTodos()
    .subscribe(usuario => this.usuario = usuario);
  }

  ngOnInit(): void {
  }

}
