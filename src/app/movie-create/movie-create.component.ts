import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category.model';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers:[AlertifyService]
})
export class MovieCreateComponent implements OnInit {

  categories: Category[];
  movie: any = {
    categoryId: ''
  };

  constructor(
    private categoryService: CategoryService,
    private movieService: MovieService,
    private router: Router,
    private alertify: AlertifyService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createMovie(){
    const movie = {
      id: 0,
      title: this.movie.title,
      description: this.movie.description,
      imageUrl: this.movie.imageUrl,
      isPopular: false,
      datePublished: new Date().getTime(),
      categoryId: this.movie.categoryId
    }

    this.movieService.createMovie(movie).subscribe(data => {
      this.router.navigate(["/movies"]);
      // this.router.navigate(["/movies", data.id]);
    });
  }

}
