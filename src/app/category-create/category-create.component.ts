import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  categoryName: string;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createCategory(){
    const category = {
      id: 0,
      name: this.categoryName
    }

    this.categoryService.createCategory(category).subscribe(data => {
      this.router.navigate(["/movies"]);
      // this.router.navigate(["/movies", data.id]);
    });;
  }

}
