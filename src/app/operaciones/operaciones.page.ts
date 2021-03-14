import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
  }
  numero1:any;
  numero2:any;
  resultado:number;
  operacion= null;



suma(){

  let num1 = parseInt(this.numero1);
      let num2 = parseInt(this.numero2);
      this.resultado =  num1 + num2;


 }
 resta(){
  let num3 = parseInt(this.numero1);
  let num4 = parseInt(this.numero2);
   this.resultado = num3 - num4;

}
multiplicacion(){
  let num1 = parseInt(this.numero1);
  let num2 = parseInt(this.numero2);
  this.resultado = num1 * num2;
}
division(){
  let num1 = this.numero1;
  let num2 = this.numero2;
  this.resultado = num1 / num2;

}
  result(){
  let op = this.operacion
  switch (op) {
    case '+':
      this.suma()
      break;
    case '-':
      this.resta()
      break;
    case '*':
      this.multiplicacion()
      break;
    case '/':
      this.division()
      break;

    default:
      console.log('ingresa una operacion valida');
  }

  }


}





