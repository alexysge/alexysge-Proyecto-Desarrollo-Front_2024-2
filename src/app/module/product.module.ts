import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './component/category/category.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class ProductModule { }