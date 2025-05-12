import { Injectable } from '@angular/core';
import { User } from '../models';

const FAKE_AUTH_USER: User = {
  id: 1,
  name: 'John Doe',
  email: 'fake@mail.com',
  password: '123456',
  role: 'admin',
  token: 'fake-jwt-token',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, password: string): User | boolean {
    if (
      email === FAKE_AUTH_USER.email &&
      password === FAKE_AUTH_USER.password
    ) {
      localStorage.setItem('token', FAKE_AUTH_USER.token);
      return FAKE_AUTH_USER;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  verifyToken(token: string): User | boolean {
    const storedToken = localStorage.getItem('token');

    if (!storedToken) {
      return false;
    }

    return FAKE_AUTH_USER;
  }
}
