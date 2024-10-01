import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../interfaces/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userUrl = "http://localhost:8080/v1/user";

  constructor(private httpClient:HttpClient) { }

  loginUser(user:any){
    let headers = new HttpHeaders({
      "Content-Type":"application/json"
    })
    return this.httpClient.post<LoginResponse>(this.userUrl+"/login",user,{headers:headers})
  }
}
