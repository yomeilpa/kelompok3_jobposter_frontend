import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class JobKategoriService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  key:any;
  constructor(private httpclient: HttpClient,private store:RegisterService) { }
  user:Subject<any> = new Subject<any>();

  //jwTUdah
  postJobkategori(any){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.post(this.apiURL+"/jobkategori",any,{headers:headers_object}).subscribe( res =>{
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
  getJobKatergori(){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobkategori",{headers:headers_object}).subscribe( res =>{
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
  getJobKatergoribyId(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/jobkategori/"+id,{headers:headers_object}).subscribe( res =>{
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
  putJobKatergoribyId(id,jobs){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.put(this.apiURL+"/jobkategori/"+id,jobs,{headers:headers_object}).subscribe( res =>{
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

  //jwtUdh
  deleteJobKatergoribyId(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.delete(this.apiURL+"/jobkategori/"+id,{headers:headers_object}).subscribe( res =>{
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
