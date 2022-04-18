import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiInterface } from "./api-Interface"
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL: string = "https://api.github.com"
  constructor(private http : HttpClient) { }

  getUsers() :Observable<ApiInterface>{
    return this.http.get<ApiInterface>(this.BASE_URL + "/users")
  }
  getRepos(){
    return this.http.get<ApiInterface>(this.BASE_URL + "/repositories")
  }

}
