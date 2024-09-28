import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API

  constructor(private http :HttpClient) {
   }

   getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
