import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { userInterface } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private app_url: string;
  private api_url: string;
  private http = inject(HttpClient);

  constructor() {
    this.app_url = environment.endpoint;
    this.api_url = 'api/users';
  }

  signIn(user: userInterface): Observable<any> {
    return this.http.post(`${this.app_url}${this.api_url}`, user);
  }

  login(user: userInterface): Observable<string> {
    return this.http.post<string>(`${this.app_url}${this.api_url}/login`, user);
  }
}
