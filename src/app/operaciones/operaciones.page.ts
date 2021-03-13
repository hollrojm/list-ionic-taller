import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  numero1= 0;
  numero2=0;
  resultado= 0;

suma(){
  
this.resultado = (this.numero1) + (this.numero2);


 }
 resta(){
  this.resultado= this.numero1 * this.numero2;
}
multiplicacion(){
  this.resultado= (this.numero1 - this.numero2);
}
division(){
  this.resultado= (this.numero1 / this.numero2);
}


}
