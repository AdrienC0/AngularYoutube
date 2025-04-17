import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged: boolean = false

  isAuthenticated(): boolean {
    return this.isLogged
  }
}
