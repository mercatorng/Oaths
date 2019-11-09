import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjx/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'https://mercatoroathapi.azurewebsites.net/api';
  constructor(private httpClient: HttpClient) {}

  createUser(user) {
    return this.httpClient.post(`${this.url}/User/Save`, user);
  }

  getUsers(institutionID){
    return this.httpClient.get(`${this.url}/User/GetByInstitutionID/${institutionID}`)
  }
}
