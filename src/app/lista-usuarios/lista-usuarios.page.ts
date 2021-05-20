import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {
usuarios:any[];
  constructor(
    private router:Router,
    private blokmenu:MenuController,
    private servico:PostService
    ) { }

  ionViewWillEnter(){
    this.carregaUsers();
    //this.blokmenu.enable(false);
   }
  ngOnInit() {


  }
  addUsuario(){
    this.router.navigate(['add-usuario']);
    //this.blokmenu.enable(true);
  }

carregaUsers(){
  return new Promise(resolve =>{
    let dados = {
      requisicao:'listar',
      nome:'',
      start:0,
      limit:10
  };
  this.servico.dadosApi(dados, 'api.php').subscribe(data =>{
    this.usuarios = data['result'];
    console.log(data);
    console.log(data['result']);
  });
  });
}

}
