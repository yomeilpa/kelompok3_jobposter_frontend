import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobKategoriService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  constructor(private httpclient: HttpClient) { }
  user:Subject<any> = new Subject<any>();

  postJobkategori(any){
    this.user = new Subject<any>();
    this.httpclient.post(this.apiURL+"/jobkategori",any).subscribe( res =>{
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
  getJobKatergori(){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobkategori").subscribe( res =>{
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
  getJobKatergoribyId(id){
    this.user = new Subject<any>();
    this.httpclient.get(this.apiURL+"/jobkategori/"+id).subscribe( res =>{
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
  putJobKatergoribyId(id,jobs){
    this.user = new Subject<any>();
    this.httpclient.put(this.apiURL+"/jobkategori/"+id,jobs).subscribe( res =>{
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
  deleteJobKatergoribyId(id){
    this.user = new Subject<any>();
    this.httpclient.delete(this.apiURL+"/jobkategori/"+id).subscribe( res =>{
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
