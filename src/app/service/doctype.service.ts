import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctypeService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  constructor(private httpclient: HttpClient) { }

  user:Subject<any> = new Subject<any>();

  getDocType(){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/doctype").subscribe(res =>{
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


  getDocTypeID(id){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/doctype/"+id).subscribe(res =>{
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


  getDocTypeTrue(){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/doctype/true").subscribe(res =>{
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
