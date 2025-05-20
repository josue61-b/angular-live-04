import { Injectable } from '@angular/core';
import { User } from '../models';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authUser$ = new BehaviorSubject<User | null>(null);
  authUser$: Observable<User | null> = this._authUser$.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): void {
    this.http
      .get<User[]>(
        `http://localhost:3000/users?email=${email}&password=${password}`
      )
      .subscribe({
        next: (response) => {
          const user = response[0];
          if (user) {
            console.log('User:', user);
            localStorage.setItem('token', user.token);
            this.router.navigate(['/dashboard']);
            this._authUser$.next(user);
          } else {
            alert('Invalid email or password');
          }
        },
      });
  }

  logout(): void {
    localStorage.removeItem('token');
    this._authUser$.next(null);
    this.router.navigate(['/login']);
  }

  verifyToken(): Observable<User | boolean> {
    const storedToken = localStorage.getItem('token');
    return this.http
      .get<User[]>(`http://localhost:3000/users?token=${storedToken}`)
      .pipe(
        map((response) => {
          const user = response[0];
          if (user) {
            localStorage.setItem('token', user.token);
            this._authUser$.next(user);
            return user;
          } else {
            return false;
          }
        })
      );
  }
}
