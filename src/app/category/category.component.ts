import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
   }

  ngOnInit(): void {
  }

  // categories =["Macera", "Romantik", "Bilim Kurgu", "Komedi"];
  // categories: Category[] = [

  // ]
}
