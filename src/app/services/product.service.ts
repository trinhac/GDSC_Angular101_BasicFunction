import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [
    {id: 1, name: 'Product 1', price:100, description:"Lorem ipsum do amet silet...", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeUyV8lTRtmIveelhwSKs0QXtP7a0UEB3Rw&usqp=CAU",quantity:2},
    {id: 2, name: 'Product 2', price:200, description:"Lorem ipsum do amet silet...", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeUyV8lTRtmIveelhwSKs0QXtP7a0UEB3Rw&usqp=CAU",quantity:44},
    {id: 3, name: 'Product 3', price:300, description:"Lorem ipsum do amet silet...", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeUyV8lTRtmIveelhwSKs0QXtP7a0UEB3Rw&usqp=CAU",quantity:12},
    {id: 4, name: 'Product 4', price:400, description:"Lorem ipsum do amet silet...", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeUyV8lTRtmIveelhwSKs0QXtP7a0UEB3Rw&usqp=CAU",quantity:21},
    {id: 5, name: 'Product 5', price:500, description:"Lorem ipsum do amet silet...", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeUyV8lTRtmIveelhwSKs0QXtP7a0UEB3Rw&usqp=CAU",quantity:32},
    {id: 6, name: 'Product 6', price:600, description:"Lorem ipsum do amet silet...", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeUyV8lTRtmIveelhwSKs0QXtP7a0UEB3Rw&usqp=CAU",quantity:6},
    {id: 7, name: 'Product 7', price:700, description:"Lorem ipsum do amet silet...", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeUyV8lTRtmIveelhwSKs0QXtP7a0UEB3Rw&usqp=CAU",quantity:7},

  ];

  getProducts() {
    return this.products;
  }

  removeProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }
  buyOnce(id: number){
    this.products = this.products.filter((product) => product.id !== id);
  }


}
