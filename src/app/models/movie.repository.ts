import { Movie } from "./movie.model";

export class MovieRepository{
  private movies: Movie[];

  constructor(){
    this.movies = [
      {id: 1, title: "Film 1", description: "Film 1 açıklama", imageUrl:"1.jpeg", isPopular: false},
      {id: 2, title: "Film 2", description: "Film 2 açıklama", imageUrl:"2.jpeg", isPopular: true},
      {id: 3, title: "Film 3", description: "Film 3 açıklama", imageUrl:"3.jpeg", isPopular: false},
      {id: 4, title: "Film 4", description: "Film 4 açıklama", imageUrl:"4.jpeg", isPopular: true},
      {id: 5, title: "Film 5", description: "Film 5 açıklama", imageUrl:"4.jpeg", isPopular: true}
    ];
  }

  getMovies(): Movie[]{
    return this.movies;
  }

  getPopularMovies(): Movie[]{
    return this.movies.filter(x => x.isPopular);
  }

  getMovieById(id: number): Movie | undefined{
    return this.movies.find(i => i.id == id);
  }
}
