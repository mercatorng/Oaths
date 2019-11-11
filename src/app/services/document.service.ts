import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
import { ChangeOfName } from '../models/changeOfName';
import { AgeDeclaration } from '../models/ageDeclaration';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  // baseUrl = environment.baseUrl;
  url = 'https://mercatoroathapi.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

  saveChangeOfName(obj: ChangeOfName) {
    return this.http.post(`${this.url}/ChangeofName/save`, obj);
  }

  saveAgeDeclaration(obj: AgeDeclaration) {
    return this.http.post(`${this.url}/AgeDeclaration/save`, obj);
  }
}
