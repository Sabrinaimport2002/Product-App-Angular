import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  public depName: string = "";

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  save(){
    //adiciona novo departamento a partir da função no serviço 
    this.departmentService.addDepartments({name: this.depName });
    this.clear();
  }

  clear(){
    this.depName = "";
  }

}
