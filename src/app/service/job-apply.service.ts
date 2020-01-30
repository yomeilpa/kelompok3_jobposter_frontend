import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobApplyService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  constructor(private httpclient: HttpClient) { }
  user:Subject<any> = new Subject<any>();

  postJobApply(any){
    this.user = new Subject<any>();
    this.httpclient.post(this.apiURL+"/jobapply",any).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
  }
  // postJobPosting(any){
  //   this.user = new Subject<any>();
  //   this.httpclient.post(this.apiURL+"/jobapply",any).subscribe( res =>{
  //     this.data = res;
  //     this.data1 ="OK";
  //     this.user.next(this.data);
  //   },
  //     (err) => {
  //       this.data=err;
  //       this.data1 ="BAD";
  //       this.user.next(this.data);
  //     })
  // }
  getJobApply(){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobapply").subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
  }
  putJobApply(id,jobs){
    this.user = new Subject<any>();
    this.httpclient.put(this.apiURL+"/jobapply/"+id,jobs).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
  }
  deleteJobApply(id){
    this.user = new Subject<any>();
    this.httpclient.delete(this.apiURL+"/jobapply/"+id).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
  }

}
