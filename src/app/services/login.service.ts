import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjx/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
}
