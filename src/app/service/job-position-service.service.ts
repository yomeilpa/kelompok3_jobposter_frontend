import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { RegisterService } from './register.service';
@Injectable({
  providedIn: 'root'
})
export class JobPositionServiceService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  key:any;
  constructor(private httpclient: HttpClient,private store:RegisterService) { }
  user:Subject<any> = new Subject<any>();

  //jwtUdah
  postJobPosition(any){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.post(this.apiURL+"/jobposition",any,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 ="OK";
      this.user.next(this.data.code);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
    })
  }

  //jwtUdah
  getJobPosition(){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobposition",{headers:headers_object}).subscribe( res =>{
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
  getJobPositionbyId(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobposition/"+id,{headers:headers_object}).subscribe( res =>{
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
  getJobPositionbyIdKate(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobposition/kate/"+id,{headers:headers_object}).subscribe( res =>{
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

  //jwtudah
  putJobPosition(id,jobs){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.put(this.apiURL+"/jobposition/"+id,jobs,{headers:headers_object}).subscribe( res =>{
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
  deleteJobPosition(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.delete(this.apiURL+"/jobposition/"+id,{headers:headers_object}).subscribe( res =>{
      this.data = res;
      this.data1 =="OK";
      this.user.next(this.data);
    },
      (err) => {
        this.data=err;
        this.data1 ="BAD";
        this.user.next(this.data);
      })
  }
    )}
}
