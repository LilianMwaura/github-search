import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: any = [];
  reponame!: any;

  constructor(private apiService: ApiService) { 
    this.apiService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
  ngOnInit(): void {
  
  }
  searchRepos() {
    this.apiService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
  }




