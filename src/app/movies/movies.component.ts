import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  movieRepository: MovieRepository;
  title: string="Film Listesi"
  filterText: string = "";
  filteredMovies: Movie[];


  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.filteredMovies = this.movies;
  }

  ngOnInit(): void {
  }

  onInputChange(){
    return this.filteredMovies = this.filteredMovies ? this.movies.filter(m =>
        m.title.toLowerCase().indexOf(this.filterText) != -1 ||
        m.description.toLowerCase().indexOf(this.filterText) != -1) : this.movies;
  }

}
