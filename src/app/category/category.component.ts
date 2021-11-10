import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryRepository } from '../models/category.repository';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  categoryRepository: CategoryRepository;
  selectedCategory: Category = null
  displayAll = true;

  constructor(private categoryService: CategoryService) {
    this.categoryRepository = new CategoryRepository();
    // this.categories = this.categoryRepository.getCategories();
   }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    })
  }

  selectCategoryClicked(item?: Category){
    if(item){
      this.displayAll = false;
      this.selectedCategory = item;
    }
    else{
      this.selectedCategory = null;
      this.displayAll = true
    }
  }

  // categories =["Macera", "Romantik", "Bilim Kurgu", "Komedi"];
  // categories: Category[] = [

  // ]
}
