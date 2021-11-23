import { Department } from './../models/departament.model';
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public name: string = "";
  public price: number = 0;
  public description: string = "";
  public department!: Department;
  public departments: Department[]=[];

  constructor(
    private productService: ProductService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    //pega todos os departamentos e joga para dentro dos campos 
    this.departments = this.departmentService.getDepartments();

  }

  save(){
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department});
      this.clear();
  }

  clear(){
    this.name = "";
    this.price = 0;
    this.description = "";
    this.department.id = undefined;
    this.department.name = undefined;
  }

}
