import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiInterface } from "./api-Interface"
@Injectable({
  providedIn: 'root'
})
export class ApiService {
    username: string;
    constructor(private http:HttpClient) {
      this.username =  'LilianMwaura';
    }
    getUser() {
      return this.http.get(`https://api.github.com/users/${this.username}`)
      
    }
    getRepos() {
      return this.http.get(`https://api.github.com/users/${this.username}/repos`)
  }
  updateUser(username: string) {
    this.username = username;
  }
  }
