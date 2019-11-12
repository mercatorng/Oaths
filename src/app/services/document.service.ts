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

  saveMarriageDeclaration(obj){
    return this.http.post(`${this.url}/Marriage/Save`,obj)
  }
  getMarriageAgeNameGeneralById(urll,id){
    return this.http.get(`${this.url}/${urll}/${id}`)
  }

  getDocumentByRef(refNo){
    return this.http.get(`${this.url}/Document/GetByDocumentRef/${refNo}`)
  }
}
