import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = "http://localhost:3000/categories";
  firebaseURL = "https://angular-movie-app-1fae1-default-rtdb.firebaseio.com/"

  constructor(private http: HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.firebaseURL + 'categories.json')
    .pipe(
      map(response => {
        const categories: Category[] = [];

        for(const key in response){
          categories.push({...response[key], id: key})
        }
        return categories;
      })
    );
  }

  createCategory(category: Category):Observable<Category>{
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Category>(this.firebaseURL + 'categories.json', category, headers)
    .pipe(tap(data => console.log(data)),
    catchError(this.handleError));
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
