import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // categories =["Macera", "Romantik", "Bilim Kurgu", "Komedi"];
  categories: Category[] = [
    {id: 1, name: "Macera"},
    {id: 1, name: "Romantik"},
    {id: 1, name: "Bilim Kurgu"},
    {id: 1, name: "Komedi"}
  ]
}
