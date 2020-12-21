import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public phone: number,
    public website: string
  ) {
  }
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(
      response => {
        console.log(response);
        this.users = response;
      }
    );
  }
}
