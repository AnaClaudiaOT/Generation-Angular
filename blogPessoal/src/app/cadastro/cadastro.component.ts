import { Component, OnInit } from '@angular/core';
import { AotSummaryResolver } from '@angular/compiler';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  senha: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService

  ) { }

  ngOnInit() {

    }

    conferirSenha(event: any){
      this.senha = event.target.value
    }

  cadastrar(){
    if(this.senha === this.user.senha ){
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alerta.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    }else{
      this.alerta.showAlertDanger('Suas senhas não conferem')

    }

    
  }


}
