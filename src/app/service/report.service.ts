import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';

  key:any;
  constructor(private http:HttpClient,private store:RegisterService) { }
  user:Subject<any> = new Subject<any>();

  getreportbyyear(year){
    this.store.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.http.get(this.apiURL+'/reportyear/'+year+'/pdf',{headers:headers_object,responseType:'blob'})
  .subscribe(res => {let g = res
    const url = window.URL.createObjectURL(g);
    let x=window.open('about:whatever');  
    let iframe=x.document.createElement('iframe')
    iframe.width='100%'
    iframe.height='100%'
    iframe.src=url;
    x.document.body.appendChild(iframe)
    window.open(url);

  })})
  }

  getmyreport(id){this.store.store.get("key").subscribe(res => {this.key = res
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.http.get(this.apiURL+'/reportbyhr/'+id+'/pdf',{headers:headers_object, responseType:'blob'}).subscribe(res => {let g = res
      const url = window.URL.createObjectURL(g);
      let x=window.open('about:whatever');  
      let iframe=x.document.createElement('iframe')
      iframe.width='100%'
      iframe.height='100%'
      iframe.src=url;
      x.document.body.appendChild(iframe)})
    })

  }

  
}
