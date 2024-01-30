import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  url: string = environment.apiBaseUrl + '/PaymentDetail';
  list: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail();
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) {
    this.refershList;
  }

  refershList() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        console.log(res);
        this.list = res as PaymentDetail[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  postPaymentDetail(){
   return this.http.post(this.url,this.formData);
  }

  resetForm(form : NgForm){
    form.form.reset();
    this.formData = new PaymentDetail();
    this.formSubmitted=false
  }

  updateForm(){
    let id : number = this.formData.paymentDetailId
    return this.http.put(this.url + '/' +id,this.formData);
  }

  deleteRecord(id : number){
   
    return this.http.delete(this.url + '/' +id)
  }
}
