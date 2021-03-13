import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = null;
  apellido = null;
  email = null;
  celular = null;

  index = null;
  usuarios = [];
  edicion = false;
  constructor() {}
  blanquear(){
    this.nombre = '';
    this.apellido = '';
    this.email = '';
    this.celular = '';
  }
 

  guardarDatos(){
    
    if (this.edicion == false){
      this.usuarios.push({
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        celular: this.celular
      })
      console.log(this.usuarios);
      this.blanquear()
    }

    if (this.edicion == true){
      this.usuarios[this.index]={
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        celular: this.celular
        
      }
      this.blanquear()
      this.edicion = false
    }
  }

  editarDatos(usuario,i){
    console.log(i)
    this.index = i;
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    this.email = usuario.email;
    this.celular = usuario.celular;
    this.edicion = true;
  }

  eliminarDatos(i){
    this.usuarios.splice(i,1);
  }

}
