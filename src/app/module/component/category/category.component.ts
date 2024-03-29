import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../_service/category.service';
import { Category } from '../../_model/category';
import { Validator, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';

declare var $: any; // JQuery

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  // Category form
  form = this.formBuilder.group({
    category: ["", [Validators.required]],
    acronym: ["", [Validators.required]],
  });
  submitted = false; // Form submitted


  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
  ){}

  onSubmit() {
    // validate form
    this.submitted = true;
    if(this.form.invalid) return;
    this.submitted = false;

    // add category to category list
    let id = this.categories.length + 1;
    let category = new Category(id, this.form.controls['category'].value!, this.form.controls['acronym'].value!, 1);
    this.categories.push(category);

    // close modal
    this.hideModalForm();

    // show message
    Swal.fire({
      position: 'center',
      icon: 'success',
      iconColor: 'white',
      title: 'Categoría ha sido agregada',
      color: 'white',
      background: '#28a745',
      showConfirmButton: false,
      timer: 2000
    });
  }

  getCategories(): Category[] {
    return this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.categories = this.getCategories();
  }

  showModalForm() {
    $("#modalForm").modal("show");
    this.form.reset();
    this.submitted = false;
  }

  hideModalForm() {
    $("#modalForm").modal("hide");
    this.form.reset();
  }
}