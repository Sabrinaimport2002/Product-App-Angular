import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  //esse atributo é uma referencia ao datatable do html
  @ViewChild(MatTable) datatable!: MatTable<any>;

  public products!: Product[];
  public prodColumns: string[]= ["id", "name", "price", "description", "department"];

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    //retornando os produtos
    this.products = this.productService.getProducts();

    /*no momento em que o produto for emitido, chamamos um método do data
    table para que seja atualizado com os novos dados*/
    this.productService.onNewProduct.subscribe((p) => {
     this.datatable.renderRows(); //atualizando os dados
    });
  }

}
