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
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  title: string="Film Listesi"

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {
  }


}
