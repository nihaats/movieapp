import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = "http://localhost:3000/movies";
  firebaseURL = "https://angular-movie-app-1fae1-default-rtdb.firebaseio.com/"

  constructor(private http: HttpClient) { }

  getMovies(categoryId: number):Observable<Movie[]>{
    return this.http.get<Movie[]>(this.firebaseURL + "movies.json")
    .pipe(
      map(response => {
        const movies: Movie[] = [];
        for(const key in response){
          if (categoryId) {
            if (categoryId === response[key].categoryId) {
              movies.push({...response[key], id: key})
            }
          }
          else{
            movies.push({...response[key], id: key})
          }
        }
        return movies;
      }),
      tap(data => {}),
    catchError(this.handleError),
    delay(3000)
    );
  }

  getMovieById(movieId: string): Observable<Movie>{
    return this.http.get<Movie>(this.firebaseURL + 'movies/' + movieId + ".json")
    .pipe(tap(data => console.log(data)),
    catchError(this.handleError)
    );
  }

  createMovie(movie: Movie):Observable<Movie>{
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Movie>(this.firebaseURL + "movies.json", movie, headers)
    .pipe(tap(data => console.log(data)),
    catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      //client ya da network
    }
    else{
      switch(error.status){
        case 404:
          console.log("Not Found");
          break;
        case 403:
          console.log("Access Denied");
          break;
        case 500:
          console.log("Internal Server Error");
          break;
        default:
          console.log("Bilinmeyen bir hata oluştu")

      }
    }
    return throwError("Bir hata oluştu.");
  }
}
