import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel = {
    username: 'james@abc.abc',
    password: 'secret',
  };
  constructor() { }

  ngOnInit() {
  }

}
