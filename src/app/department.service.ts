import { Injectable } from '@angular/core';
import { Department } from './models/departament.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public departments: Department [] = [
    {id: 1, name: "Clothing"},
    {id: 2, name: "Books"},
    {id: 3, name: "Electronics"},
    {id: 4, name: "Shoes"}
  ];
  private nextID: number = 5;

  constructor() { }

  //função para retornar os departamentos
  getDepartments(): Department[]{
    return this.departments;
  }

  //função para adicionar os departamentos
  addDepartments(d: Department){
    this.departments.push({...d, id: this.nextID++});
    console.log(this.departments);
  }

  getDepartmentById(id: number): Department {
    //retorna esse elemnto quando o primeiro elemento que for retornado como true
   //return this.departments.find((d) => d.id == id);
   return this.departments.filter(depart => depart.id == id)[0];
  }

}
