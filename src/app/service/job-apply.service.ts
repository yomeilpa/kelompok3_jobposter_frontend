import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class JobApplyService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  key:any;
  constructor(private httpclient: HttpClient,private store:RegisterService) { }
  user:Subject<any> = new Subject<any>();

  //JwtUdah
  postJobApply(any){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.post(this.apiURL+"/jobapply",any,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
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


  //JwtUdah
  getJobApply(){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobapply",{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }


  //JwtUdah
  countJobApplybyCandidate(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/count/app/"+id,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }

  //jtUdah
  getJobApplybyJob(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/job/app/"+id,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }

  //jwtUdah
  rvwJobApplybyJob(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobapply/review/"+id,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }

  //jwtUdah
  rejectJobApplybyJob(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobapply/rejected/"+id,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }


  //hwtUdah
  accJobApplybyJob(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobapply/accepted/"+id,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }

  //jwtUdha
  negoJobApplybyJob(id,any){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.post(this.apiURL+"/jobapply/nego/"+id,any,{headers:headers_object}).subscribe( res =>{
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
    )
  }

  //jwtUdah
  getobApplybyJobAcc(){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobapply/get/acc",{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }

  //jwtUdah
  invJobApplybyJob(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobapply/invitation/"+id,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }
  //jwtUdah
  getJobApplybyCandidate(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobapply/get/"+id,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }
  
  //jwtUdah
  getJobApplybyid(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobapply/"+id,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }

  //jwtUdah
  putJobApply(id,jobs){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.put(this.apiURL+"/jobapply/"+id,jobs,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }

  //jwtUdah
  deleteJobApply(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.delete(this.apiURL+"/jobapply/"+id,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }

}
