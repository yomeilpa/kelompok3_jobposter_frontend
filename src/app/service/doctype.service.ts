import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class DoctypeService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  key:any;
  constructor(private httpclient: HttpClient,private store:RegisterService) { }

  user:Subject<any> = new Subject<any>();
  //JwtUdah
  getDocType(){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/doctype",{headers:headers_object}).subscribe(res =>{
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
  getDocTypeID(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/doctype/"+id,{headers:headers_object}).subscribe(res =>{
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
  getCd(id,is){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/doc/"+id+"/"+is,{headers:headers_object}).subscribe(res =>{
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
  delete(id,is){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.delete(this.apiURL+"/doc/"+id+"/"+is,{headers:headers_object}).subscribe(res =>{
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
  getDocTypeTrue(){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/doctype/true",{headers:headers_object}).subscribe(res =>{
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
  }
    )}
}
