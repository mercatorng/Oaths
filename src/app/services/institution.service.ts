import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  // url = 'https://mercatoroathapi.azurewebsites.net/api';
  url = 'https://affidavitdemoapi.azurewebsites.net/api';
  constructor(
    private httpClient:HttpClient
  ) { }

  getInstitutionById(id){
    return this.httpClient.get(`${this.url}/Institution/GetByID/${id}`)
  }

  updateInstitution(institution){
    return this.httpClient.post(`${this.url}/Institution/Update`,institution)
  }
}
