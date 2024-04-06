import { Injectable } from '@angular/core';
import { Category } from '../_model/category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor() { }

  getCategories(): Category[] {
    const categories: Category[] = [
      new Category(1,"Tecnologia","TECH", 1),
      new Category(2,"Moda","FAST", 1),
      new Category(3,"Viajes","TRAV", 1),
    ];
    return categories;
  }
}
