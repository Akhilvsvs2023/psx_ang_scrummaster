import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private service:ToastrService) { }

  callSuccessToaster(header:string, body:string,){
    this.service.success(body,header);
  }
  callWarningToaster(header:string, body:string,){
    this.service.warning(body,header);
  }
  callErrorToaster(header:string, body:string,){
    this.service.error(body,header);
  }
  callInfoToaster(header:string, body:string,){
    this.service.info(body,header);
  }
}
