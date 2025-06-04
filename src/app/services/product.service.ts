import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = PRODUCTS.find(p => p.id === id);
    return of(product);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = PRODUCTS.filter(p => p.category === category);
    return of(filteredProducts);
  }

  searchProducts(searchTerm: string): Observable<Product[]> {
    const filteredProducts = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return of(filteredProducts);
  }
}