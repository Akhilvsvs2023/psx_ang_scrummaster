// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpInterceptor,
//   HttpSentEvent,
//   HttpHeaderResponse,
//   HttpProgressEvent,
//   HttpResponse,
//   HttpUserEvent
// } from '@angular/common/http';
// import { Observable, tap } from 'rxjs';
// import { ToasterService } from './toaster.service';
// import { Router } from '@angular/router';

// const TOKEN_HEADER_KEY = 'Authorization';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {

//   constructor(private toastr:ToasterService,private router:Router) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler):
//         Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
//         // add authorization header with jwt token if available
//         console.log('intercepted request ... ');
//         const token=window.sessionStorage.getItem('token');
//         let authReq = req;
//         // if (token != null) {
//         //     authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
//         // }
//         console.log('Sending request with new header now ... ');
//         return next.handle(authReq).pipe(
//             tap(event => {
//                 if (event instanceof HttpResponse) {
//                     console.log(' Successfully response with status code : ' + event.status);
//                 }
//             }, error => {
//                 if (error.status === 0 || error.status === 400 || error.status === 401 || error.status === 403 || error.status === 500) {
//                     if (error.status === 0) {
//                         this.toastr.callErrorToaster('Error','Internal server error');
//                     }
//                     this.router.navigate(['/login']);
//                 }
//                 console.log('--- end of response---');
//             })
//         );
//     }
// }
