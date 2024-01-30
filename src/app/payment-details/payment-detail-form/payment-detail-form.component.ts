import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css'],
})
export class PaymentDetailFormComponent {
  constructor(
    public service: PaymentDetailService,
    private toaster: ToastrService
  ) {}
  onSubmit(form: NgForm) {
    this.service.formSubmitted =true;
    if(form.valid){
      if(form.value.paymentDetailId==0){
          this.service.postPaymentDetail().subscribe({
          next: (res) => {
          console.log(res);
          this.service.list = res as PaymentDetail[];
          this.service.resetForm(form);
          this.toaster.success("Payment Detail Success");
          },
          error: (err) => {
          console.log(err);
          },
        });
      }
      if(form.value.paymentDetailId!=0){
        this.service.updateForm().subscribe({
          next : (res) => {
            this.service.list = res as PaymentDetail[];
            this.service.resetForm(form);
            this.toaster.success("Payment  Detail Updated Success");
            },
            error: (err) => {
            console.log(err);
            },
          
        })
      }
    }
  }

  
}
