import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostingjobService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  constructor(private httpclient: HttpClient) { }
  user:Subject<any> = new Subject<any>();

  postJobPosting(any){
    this.user = new Subject<any>();
    this.httpclient.post(this.apiURL+"/jobposting",any).subscribe( res =>{
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
  getJobPosting(){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobposition").subscribe( res =>{
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
  getJobPostingbyId(id){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobposition/"+id).subscribe( res =>{
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
  putJobPosting(id,jobs){
    this.user = new Subject<any>();
    this.httpclient.put(this.apiURL+"/jobposition/"+id,jobs).subscribe( res =>{
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
  deleteJobPosting(id){
    this.user = new Subject<any>();
    this.httpclient.delete(this.apiURL+"/jobposition/"+id).subscribe( res =>{
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

  postJobDes(id,any){
    this.user = new Subject<any>();
    this.httpclient.post(this.apiURL+"/jobdetail/"+id,any).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data.code);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
  }
  getJobDesc(){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobposition").subscribe( res =>{
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
  getJobDescbyId(id){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobposition/"+id).subscribe( res =>{
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
  putJobDesc(id,jobs){
    this.user = new Subject<any>();
    this.httpclient.put(this.apiURL+"/jobposition/"+id,jobs).subscribe( res =>{
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
  deleteJobDesc(id){
    this.user = new Subject<any>();
    this.httpclient.delete(this.apiURL+"/jobposition/"+id).subscribe( res =>{
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

  postJobReq(id,any){
    this.user = new Subject<any>();
    this.httpclient.post(this.apiURL+"/jobrecruitment/"+id,any).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data.code);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
  }
  getJobReq(){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobposition").subscribe( res =>{
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
  getJobReqbyId(id){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobposition/"+id).subscribe( res =>{
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
  putJobReq(id,jobs){
    this.user = new Subject<any>();
    this.httpclient.put(this.apiURL+"/jobposition/"+id,jobs).subscribe( res =>{
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
  deleteJoReq(id){
    this.user = new Subject<any>();
    this.httpclient.delete(this.apiURL+"/jobposition/"+id).subscribe( res =>{
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
