import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  key:any;
  constructor(private httpclient: HttpClient,private store:RegisterService) { }

  user:Subject<any> = new Subject<any>();

  //JwtUdah
  getEducation(){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(ress => {this.key = ress
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/education",{headers:headers_object}).subscribe(res =>{
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
  getEducationCandidate(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(ress => {this.key = ress
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/education/candidate/get/"+id,{headers:headers_object}).subscribe(res =>{
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
  postEducandiate(id,candidate){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(ress => {this.key = ress
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.post(this.apiURL+"/education/candidate/"+candidate,id,{headers:headers_object}).subscribe(res =>{
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
  putEdu(id,candidate){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(ress => {this.key = ress
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.put(this.apiURL+"/education/candidate/"+candidate,id,{headers:headers_object}).subscribe(res =>{
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
  delete(id){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(ress => {this.key = ress
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.delete(this.apiURL+"/education/candidate/"+id,{headers:headers_object}).subscribe(res =>{
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
  getEduid(id:string){
    this.user = new Subject<any>();
    this.store.store.get("key").subscribe(ress => {this.key = ress
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.httpclient.get(this.apiURL+"/education/candidate/"+id,{headers:headers_object}).subscribe(res =>{
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
  
  

}
