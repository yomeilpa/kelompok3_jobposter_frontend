import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
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
    this.http.post<any>(this.apiURL+"/login",data).subscribe(res =>{
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

  
  public resetPassword(id,data:any){
    this.user = new Subject<any>();
    this.http.put<any>(this.apiURL+"/update/password/"+id,data).subscribe(res =>{
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
  public uploadPhoto(formdata:any,id:any){
    this.user = new Subject<any>();
    this.http.put<any>(this.apiURL+"/uploadphoto/"+id,formdata,{reportProgress : true}).subscribe(res =>{
      this.data = res;
      this.data1="suc";
      alert("Succes");
      
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
  }

  public updateCandidate(formdata:any,id:any){
    this.user = new Subject<any>();
    this.http.put<any>(this.apiURL+"/update/"+id,formdata).subscribe(res =>{
      this.data = res;
      this.data1="suc";
      alert("Succes");
      
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
  }
}
