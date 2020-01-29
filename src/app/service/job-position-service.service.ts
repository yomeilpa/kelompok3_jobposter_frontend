import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobPositionServiceService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  constructor(private httpclient: HttpClient) { }
  user:Subject<any> = new Subject<any>();

  postJobPosition(any){
    this.user = new Subject<any>();
    this.httpclient.post(this.apiURL+"/jobposition",any).subscribe( res =>{
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
  getJobPosition(){
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
  getJobPositionbyId(id){
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
  getJobPositionbyIdKate(id){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobposition/kate/"+id).subscribe( res =>{
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

  putJobPosition(id,jobs){
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
  deleteJobPosition(id){
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
