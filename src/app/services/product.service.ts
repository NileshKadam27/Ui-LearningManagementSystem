import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API
  private allCategories="http://localhost:8080/v1/course/category";

  constructor(private http :HttpClient) {
   }

   getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }





  getAllCategories():Observable<any>{
      let headers = new HttpHeaders({
        "Content-Type":"application/json"
      })
      return this.http.get(this.allCategories,{headers: headers})
    }
  

  

}
