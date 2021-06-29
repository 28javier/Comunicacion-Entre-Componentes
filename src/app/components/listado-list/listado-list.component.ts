import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/usuario.models';

@Component({
  selector: 'app-listado-list',
  templateUrl: './listado-list.component.html',
  styleUrls: ['./listado-list.component.css']
})
export class ListadoListComponent implements OnInit {

  listEmpleado: Empleado[] = [
    { id: 1, nombre: 'Javier', apellido: 'Velez', sexo:'Masculino', salario: 1000},
    {id: 2, nombre: 'Grace', apellido: 'Tandalia', sexo:'Femenino', salario: 800},
    {id: 3, nombre: 'Sergio', apellido: 'Loor', sexo:'Masculino', salario: 1200},
    {id: 4, nombre: 'Cristina', apellido: 'Hidalgo', sexo:'Femenino', salario: 500},
    {id: 5, nombre: 'Jonathan', apellido: 'Alcivar', sexo:'Masculino', salario: 1000},
    {id: 6, nombre: 'Angela', apellido: 'Tandalia', sexo:'Femenino', salario: 1000},
    {id: 7, nombre: 'Tifanny', apellido: 'Tandalia', sexo:'Femenino', salario: 800}
  ];

  radioButonSeleccionado: string = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number {
    return this.listEmpleado.length;
  }

  obtenerTotalFemenino(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculino(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Masculino').length;
  }

  empleadoCount(radioButtonSelec: string): void{
    this.radioButonSeleccionado = radioButtonSelec;
  }
}
