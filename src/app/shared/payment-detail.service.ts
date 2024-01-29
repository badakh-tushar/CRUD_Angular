import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http : HttpClient) {

    refershList(){
      this.http.get('url')
    }
   }
}
