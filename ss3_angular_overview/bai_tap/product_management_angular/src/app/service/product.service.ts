import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  // = [
  //   {
  //   id: 1,
  //   name: 'IPhone 12',
  //   price: 2400000,
  //   description: 'New'
  // }, {
  //   id: 2,
  //   name: 'IPhone 11',
  //   price: 1560000,
  //   description: 'Like new'
  // }, {
  //   id: 3,
  //   name: 'IPhone X',
  //   price: 968000,
  //   description: '97%'
  // }, {
  //   id: 4,
  //   name: 'IPhone 8',
  //   price: 7540000,
  //   description: '98%'
  // }, {
  //   id: 5,
  //   name: 'IPhone 11 Pro',
  //   price: 1895000,
  //   description: 'Like new'
  // }];

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  update(product: Product) {
    this.products = this.products.map( (p) => {
      if (p.id === product.id) {
          p = product;
        }
      return p;
    });
    console.log(this.products);
  }

  delete(id: number) {
    this.products = this.products.filter((p) => p.id !== id);
  }

  postProduct(data: any) {
    return this.http.post<any>('http://localhost:3000/productList/', data);
  }
  getAllProducts() {
    return this.http.get<any>('http://localhost:3000/productList');
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/productList/' + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>('http://localhost:3000/productList/' + id);
  }
}
