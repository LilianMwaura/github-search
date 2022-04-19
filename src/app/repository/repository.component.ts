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
  username!: string;
  repositories!: Object;


  constructor(private apiService: ApiService) {
    this.apiService.getRepositories().subscribe(repositories => {
      this.repositories = repositories;
    });
  }

  ngOnInit(): void {

  }
  
  searchRepos() {
    this.apiService.updateUser(this.username);
    this.apiService.getRepositories().subscribe(repositories => {
      this.repositories = repositories;
    });
  }
}




