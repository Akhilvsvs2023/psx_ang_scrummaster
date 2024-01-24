import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private service:ToastrService) { }

  callSuccessToaster(header:string, body:string,){
    this.service.success(body,header,{ timeOut:3000,progressBar:true});
  }
  callWarningToaster(header:string, body:string,){
    this.service.warning(body,header,{ timeOut:3000,progressBar:true});
  }
  callErrorToaster(header:string, body:string,){
    this.service.error(body,header,{ timeOut:3000,progressBar:true});
  }
  callInfoToaster(header:string, body:string,){
    this.service.info(body,header,{ timeOut:3000,progressBar:true});
  }
}
