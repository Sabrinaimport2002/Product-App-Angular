import { EventEmitter, Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { Department } from './models/departament.model';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    {id: 1, name: "Laptop", department_id: 3, price: 3000, description: "Laptop description"},
    {id: 2, name: "Shirt", department_id: 1, price: 40, description: "Shirt description"},
    {id: 3, name: "Polo", department_id: 1, price: 40, description: "Polo description"},
    {id: 4, name: "Mouse", department_id: 3, price: 60, description: "Mouse description"},
  ];

  private products: Product[] = [];
  private nextID: number = 0;
  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private departmentService: DepartmentService) {
    for(let p of this.dataFromServer){
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.id)
      });
      this.nextID = p.id+1;
    }
   }

   getProducts(): Product[] {
    return this.products;
  }

  addProduct(p: Product){
   let prod: Product = ({id: this.nextID++, ...p }); //produto criado
   this.products.push(prod); //produto inserido no array
    console.log(this.products);

    //utilizado para emitir um novo produto que estamos inserindo
    this.onNewProduct.emit(prod); //produto emitido
  }
}
