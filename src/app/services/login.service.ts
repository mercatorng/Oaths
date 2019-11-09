import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjx/add/operator/catch';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  url = 'https://mercatoroathapi.azurewebsites.net/api';
  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // login(obj) {
  //   return this.http.post<any>(`${url}/User/Authenticate`, obj)
  // }

  createUser(user) {
    return this.httpClient.post(`${this.url}/User/Save`, user);
  }

  getUsers(institutionID) {
    return this.httpClient.get(
      `${this.url}/User/GetByInstitutionID/${institutionID}`
    );
  }
}
