import { Injectable } from '@angular/core';


/**StorageService manages user information (username, email, roles) inside Browser’s Session Storage.
 * For Logout, we will clear this Session Storage. */

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor() { }

  clean(): void {
    window.sessionStorage.removeItem(USER_KEY);
    sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    else{
      return false;
    }

  }
}



