import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { StorageMap} from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  datas:any;
  datauser:any;
  constructor(private httpclient: HttpClient,public store:StorageMap) { }

  user:Subject<any> = new Subject<any>();

  public LoginUser(data:any){
    
    this.httpclient.post<any>(this.apiURL+"/login",data).subscribe(res =>{
    this.data = res;
    this.data1="suc";
    this.user.next(this.data);
    this.store.set("user",res).subscribe(() => {});
    
    },
    (ress) =>{
      this.data1 ="gagal";
      this.data= ress;
      this.user.next(this.data);

    })
  }
}
