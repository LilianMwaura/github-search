import { Component, OnInit } from '@angular/core';
import { ApiInterface } from '../api-Interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: any= [];
  repos: any= [];
  username!: string;

  constructor(private apiService: ApiService) {
    this.apiService.getUser().subscribe(user=> {
      console.log(user);
      this.user = user;
    });
    this.apiService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  ngOnInit(): void {

  }
  searchUser() {
    this.apiService.updateUser(this.username);
    this.apiService.getUser().subscribe(user => {
      this.user = user;
    });
    this.apiService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
}

