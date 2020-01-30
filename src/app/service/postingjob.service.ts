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
    this.httpclient.get(this.apiURL+"/jobposting").subscribe( res =>{
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
    this.httpclient.get(this.apiURL+"/jobposting/"+id).subscribe( res =>{
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
    this.httpclient.put(this.apiURL+"/jobposting/"+id,jobs).subscribe( res =>{
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
    this.httpclient.delete(this.apiURL+"/jobposting/"+id).subscribe( res =>{
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
    this.httpclient.get(this.apiURL+"/jobdetail").subscribe( res =>{
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
    this.httpclient.get(this.apiURL+"/jobdetail/"+id).subscribe( res =>{
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

  getJobDescbyJob(id){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobdetail/get/"+id).subscribe( res =>{
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
    this.httpclient.put(this.apiURL+"/jobdetail/"+id,jobs).subscribe( res =>{
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
    this.httpclient.delete(this.apiURL+"/jobdetail/"+id).subscribe( res =>{
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
    this.httpclient.get(this.apiURL+"/jobrecruitment").subscribe( res =>{
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
    this.httpclient.get(this.apiURL+"/jobrecruitment/"+id).subscribe( res =>{
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

  getJobReqbyJob(id){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobrecruitment/get/"+id).subscribe( res =>{
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
    this.httpclient.put(this.apiURL+"/jobrecruitment/"+id,jobs).subscribe( res =>{
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
    this.httpclient.delete(this.apiURL+"/jobrecruitment/"+id).subscribe( res =>{
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
