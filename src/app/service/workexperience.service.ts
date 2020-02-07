import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class WorkexperienceService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  key:any;
  constructor(private httpclient: HttpClient,private store:RegisterService) { }

  user:Subject<any> = new Subject<any>();

  //jwtUdah
  getWordCan(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/experience/candidate/get/"+id,{headers:headers_object}).subscribe(res =>{
      this.data1 ="succes";
      this.data = res;
      this.user.next(this.data);
    },
    (res) =>
    {
      this.data1 = "gagal";
      this.data = res;
      this.user.next(this.data);
    }
    )
  })
  }
  
  //JwtUdah
  postWorkCand(id,candidate){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.post(this.apiURL+"/experience/candidate/"+candidate,id,{headers:headers_object}).subscribe(res =>{
      this.data1 ="succes";
      this.data = res;
      this.user.next(this.data);
    },
    (res) =>
    {
      this.data1 = "gagal";
      this.data = res;
      this.user.next(this.data);
    }
    )
  })
  }

  //jwtUdah
  putWorkCand(id,candidate){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.put(this.apiURL+"/experience/candidate/"+candidate,id,{headers:headers_object}).subscribe(res =>{
      this.data1 ="succes";
      this.data = res;
      this.user.next(this.data);
    },
    (res) =>
    {
      this.data1 = "gagal";
      this.data = res;
      this.user.next(this.data);
    }
    )})
  }


  //jwtUdah
  delete(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.delete(this.apiURL+"/experience/candidate/"+id,{headers:headers_object}).subscribe(res =>{
      this.data1 ="succes";
      this.data = res;
      this.user.next(this.data);
    },
    (res) =>
    {
      this.data1 = "gagal";
      this.data = res;
      this.user.next(this.data);
    }
    )})
  }
  

  //jwtUdah
  geWorkid(id:string){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/experience/candidate/"+id,{headers:headers_object}).subscribe(res =>{
      this.data1 ="succes";
      this.data = res;
      this.user.next(this.data);
    },
    (res) =>
    {
      this.data1 = "gagal";
      this.data = res;
      this.user.next(this.data);
    }
    )})
  }
}
