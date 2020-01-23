import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  constructor(private httpclient: HttpClient) { }

  user:Subject<any> = new Subject<any>();

  getEducation(){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/education").subscribe(res =>{
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
  getEducationCandidate(id){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/education/candidate/get/"+id).subscribe(res =>{
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
  
  postEducandiate(id,candidate){
    this.user = new Subject<any>();
    this.httpclient.post(this.apiURL+"/education/candidate/"+candidate,id).subscribe(res =>{
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

  putEdu(id,candidate){
    this.user = new Subject<any>();
    this.httpclient.put(this.apiURL+"/education/candidate/"+candidate,id).subscribe(res =>{
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

  delete(id){
    this.user = new Subject<any>();
    this.httpclient.delete(this.apiURL+"/education/candidate/"+id).subscribe(res =>{
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
  

  getEduid(id:string){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/education/candidate/"+id).subscribe(res =>{
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
  
  

}
