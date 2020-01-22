import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  constructor(private httpclient: HttpClient) { }

  user:Subject<any> = new Subject<any>();

  getProvince(){
    this.httpclient.get(this.apiURL+"/province").subscribe(res =>{
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

  getCity(prov:string){
    this.httpclient.get(this.apiURL+"/prov/city/"+prov).subscribe(res =>{
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

  getPros(){
    return this.httpclient.get<any>(this.apiURL+"/province").toPromise()
    .then(res => <any[]>res.data)
      .then(data => { return data; });
    }
  }

