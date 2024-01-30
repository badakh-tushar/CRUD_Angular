import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service : PaymentDetailService, private toaster : ToastrService){
     
  }
  ngOnInit(): void {
   this.service.refershList();
  }
  OnUpdate(pd : PaymentDetail) {
   
   // this.service.formData=pd;
    this.service.formData=Object.assign({},pd) ;
  }

  deleteRecord(id : number){
    this.service.deleteRecord(id)
        .subscribe(
          {
            next: res=>{
              this.service.list = res as PaymentDetail[]
              this.toaster.warning('Record deleted successfully')
            }
          }
        )
  }
}
