import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { StorageMap} from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  data:any;
  data1:any;
  datas:any;
  datauser:any;
  ok:any;
  key:any;

  

  constructor(private http:HttpClient,public store:StorageMap) { }

  user:Subject<any> = new Subject<any>();
  candidate:Subject<any> = new Subject<any>();

 

  registerCandidate(any){
    this.user = new Subject<any>();
    this.http.post(this.apiURL+"/register",any).subscribe(res =>{
      this.data1 ="succes";
      this.datauser = res;
      this.user.next(this.datauser);
    },
    (res) =>
    {
      this.data1 = "gagal";
      this.datauser = res;
      this.user.next(this.datauser);
    }
    )
  }

  registerAdmin(any){
    this.user = new Subject<any>();
    this.http.post(this.apiURL+"/register/admin",any).subscribe(res =>{
      this.data1 ="succes";
      this.datauser = res;
      this.user.next(this.datauser);
    },
    (res) =>
    {
      this.data1 = "gagal";
      this.datauser = res;
      this.user.next(this.datauser);
    }
    )
  }
  

  public LoginUser(data:any){
    this.user = new Subject<any>();
    this.http.post<any>(this.apiURL+"/jwt/login",data).subscribe(res =>{
    this.data = res;
    this.data1="suc";
    this.user.next(this.data);
    this.store.set("user",res[0]).subscribe(() => {});
    this.store.set("key",res[1]).subscribe(() =>{});
    
    },
    (ress) =>{
      this.data1 ="gagal";
      this.data= ress;
      this.user.next(this.data);

    })
  }

    //jwtUdah
  public findByid(id){
    this.user = new Subject<any>();
    this.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.http.get(this.apiURL+"/candidate/"+id,{headers:headers_object}).subscribe(res => {
      this.data = res;
      this.user.next(this.data)});
    })
  }
  
  //jwtUdah
  public resetPassword(id,data:any){
    this.user = new Subject<any>();
    this.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.http.put<any>(this.apiURL+"/update/password/"+id,data,{headers:headers_object}).subscribe(res =>{
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
  })
  }

  //jwtUdah
  public uploadPhoto(formdata:any,id:any){
    this.user = new Subject<any>();
    this.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.http.put<any>(this.apiURL+"/uploadphoto/"+id,formdata,{reportProgress : true,headers:headers_object}).subscribe(res =>{
      this.data = res;
      this.data1="suc";      
      this.store.get("user").subscribe( res => {
        this.ok = res;
        this.ok.candidate = this.data;
        this.store.set("user",this.ok).subscribe(() => {});        
      })
      },
      (ress) =>{
        this.data1 ="gagal";
        this.data= ress;
        this.user.next(this.data);
      })
    })
  }

  //JWTUDAH
  public updateCandidate(formdata:any,id:any){
    this.user = new Subject<any>();
    this.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.http.put<any>(this.apiURL+"/update/"+id,formdata,{headers:headers_object}).subscribe(res =>{
      this.data = res;
      this.data1="suc";      
      this.store.get("user").subscribe( res => {
        this.ok = res;
        this.ok.candidate = this.data;
        this.store.set("user",this.ok).subscribe(() => {});        
      })      
      },
      (ress) =>{
        this.data1 ="gagal";
        this.data= ress;
        this.user.next(this.data);
  
      })
    })
  }
}
