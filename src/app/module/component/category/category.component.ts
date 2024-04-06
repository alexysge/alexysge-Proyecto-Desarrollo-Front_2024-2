import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../_service/category.service';
import { Category } from '../../_model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent implements OnInit {

  categoryService: CategoryService;
  categories: Category[] = [];

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
  }

  getCategories(): Category[] {
    return this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.categories = this.getCategories();
  }
}