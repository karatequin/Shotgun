import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  loggedInUser: User = {_id: "1", firstName: "Christian", lastName: "Karlsen"} as User;
 
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}