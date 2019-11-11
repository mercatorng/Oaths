import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  // baseUrl = environment.baseUrl;

  url = 'https://mercatoroathapi.azurewebsites.net/api'
  
  constructor(
    private httpClient:HttpClient
  ) { }

  getMarriageAgeNameGeneralById(urll,id){
    return this.httpClient.get(`${this.url}/${urll}/${id}`)
  }
}
