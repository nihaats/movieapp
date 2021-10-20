import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieRepository } from '../models/movie.repository';

declare let alertify: any;

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
  selectedMovie: Movie;


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

  addToList(value: any, movie: Movie){
    if(value.classList.contains('btn-primary')){
      value.innerText ="Listeden Çıkar"
      value.classList.remove('btn-primary');
      value.classList.add('btn-danger');

      alertify.success(movie.title + ' listene eklendi.');
    }
    else{
      value.innerText ="Listeye Ekle"
      value.classList.remove('btn-danger');
      value.classList.add('btn-primary');

      alertify.error(movie.title + ' listenden çıkarıldı.');

    }
  }

}
