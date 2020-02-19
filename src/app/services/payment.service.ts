import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  // url = 'https://mercatoroathapi.azurewebsites.net/api';
  url = 'https://affidavitdemoapi.azurewebsites.net/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  savePayment(obj){
    return this.httpClient.post(`${this.url}/Payment/Save`,obj)
  }
}
