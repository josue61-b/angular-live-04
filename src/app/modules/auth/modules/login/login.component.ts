import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      alert('Please fill in all fields');
    } else {
      const { email, password } = this.loginForm.value;
      const user = this.authService.login(email, password);

      // if (user) {
      //   // Navigate to the dashboard or any other route
      //   this.router.navigate(['/dashboard']);
      // } else {
      //   alert('Invalid email or password');
      // }
    }
  }
}
