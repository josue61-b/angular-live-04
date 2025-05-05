import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    console.log('Login');
    localStorage.setItem('token', 'asdasdasdsadasdsadasdsadsa');
    this.router.navigate(['dashboard']);
  }
}
