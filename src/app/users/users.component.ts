import { Component, OnInit } from '@angular/core';
import { ApiInterface } from '../api-Interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: ApiInterface [] = []
  constructor(private userService: ApiService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => console.log(data)
    )
  }

}
