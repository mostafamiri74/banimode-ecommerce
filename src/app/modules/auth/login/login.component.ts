import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userEmail: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public login(loginForm: NgForm) {
    this.authService.setUser();
    console.log(loginForm);
  }
}
