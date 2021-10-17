import { Category } from "./category.model";

export class CategoryRepository{
  private categories: Category[];

  constructor(){
    this.categories = [
      {id: 1, name: "Macera"},
      {id: 1, name: "Romantik"},
      {id: 1, name: "Bilim Kurgu"},
      {id: 1, name: "Komedi"}
    ];
  }

  getCategories(): Category[]{
    return this.categories;
  }
}
