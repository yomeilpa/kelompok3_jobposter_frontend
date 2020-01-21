import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { StorageMap, LocalStorage } from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiURL = 'http://localhost:8080';
  data:any;
  data1:any;
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
