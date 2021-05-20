import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
id:number=0; nome:string=""; email:string = ""; telefone:string="";
cidade:string="";
cpf:string="";
  constructor(private servico:PostService) { }
  ngOnInit() {
  }
  cadastrar(){
    return new Promise(resolve =>{
      let usuario = {
      requisicao:'add',
      nome:this.nome,
      email:this.email,
      telefone:this.telefone,
      cidade:this.cidade,
      cpf:this.cpf
    };
    this.servico.dadosApi(usuario, 'api.php').subscribe(data =>{
      console.log(data);
    });
  })

  }



}
